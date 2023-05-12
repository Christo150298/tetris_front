import React, {useEffect, useMemo, useState} from 'react';
// Components
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';
import { checkCollision ,createStage} from '../../utils/gameHelpers';
//Stylos componentes
import "../../styles/Tetris/tetris.css"
import "../../styles/Tetris/tetrominos.css"
//hooks
import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useInterval } from '../../hooks/useInterval';
import { useGameStatus } from '../../hooks/useGameStatus';
import useControls from '../../hooks/useControls.js';
import useAppContext from '../../store/context.js';

const Tetris = ({sendStage = null, room = null}) => {
    const {buttonsMap} = useControls();
    //tiempo de caida que dependerá del nivel que se encuentre el jugador
    const [dropTime , setDropTime] = useState(null);
    //establece el fin del juego que nos indicará si el juego a terminado o no
    const [gameOver, setGameOver]= useState(false);
    
    //desestructuramos 
    const {player, updatePlayerPos, resetPlayer, playerRotate} = usePlayer();
    //Estado de juego para ese jugador
    const {stage, setStage, rowsCleared} = useStage(player, resetPlayer);
    const {score, setScore, rows, level, setLevel, time, handlePause,pause, handleResetTimer} = useGameStatus(rowsCleared);
    const {store } = useAppContext()
    const { userInfo , isUserLogged } = store;
   //coje la direccion
  const movePlayer = dir => {
      //si no chocamos hace el movimiento y si es asi no hace nada
      if (!checkCollision(player, stage, { x:dir, y: 0})) {
        updatePlayerPos({ x: dir, y: 0 });
      }
    };
  
//funcion para el boton de start
const startGame = () => {
  handleResetTimer();
  setStage(createStage());
  setDropTime(1000);
  resetPlayer();
  setGameOver(false);
  setScore(0)
  setLevel(0)
};

const drop = () => {
  if (pause) return
  // Increase level when player has cleared 10 rows
  if (rows > (level + 1) * 10) {
    setLevel(prev => prev + 1);
    // Also increase speed
    setDropTime(1000 / (level + 1) + 200);
  }
  if (!checkCollision(player, stage, { x: 0, y: 1 })) {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  } else {
    // Game Over
    if (player.pos.y < 1) {

      setGameOver(true);
      setDropTime(null);
    }
    updatePlayerPos({ x: 0, y: 0, collided: true });
  }
};

  const dropPlayer = () => {
    
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (keyCode === buttonsMap.pauseButton.keyCode) {
      handlePause(); //Pausar(o despausar) la partida
    }

    if (pause) return
    if (gameOver) {
    
      handlePause()
      // AQUI AÑADIR LOGICA PARA MANDAR EL RESULTADO AL SERVIDOR
      // console.log(score,timer,rows,level)
      
      return}
    if (keyCode === buttonsMap.moveLeftButton.keyCode) {
      movePlayer(-1); //mueve a la izquierda
    } else if (keyCode === buttonsMap.moveRightButton.keyCode) {
      movePlayer(1); //mueve a la derecha
    } else if (keyCode === buttonsMap.moveDownButton.keyCode) {
      dropPlayer(); //mueve hacia abajo
      setDropTime(1000 / (level + 1) + 200) //reinicia el contador
    }else if (keyCode === buttonsMap.rotateButton.keyCode) {
      playerRotate(stage, 1); //rota la pieza
    } 
  }
  
  const timer = useMemo(()=>{
    let minutos = String(Math.floor(time / 60))
    let segundos = String(time % 60)
    if(segundos.length === 1){
      segundos = `0${segundos}`
    }
    if(minutos.length === 1){
      minutos = `0${minutos}`
    }
    return` ${minutos} : ${segundos}`
  },[time])

  useInterval(()=>{
    drop();
  },dropTime)

  useEffect(()=>{
    //  Lo que hay que mandar cada vez que cambie por socket :
 
    if (room == null) return
    sendStage({stage:{stage:stage, username:userInfo.user},room:room})
  },[stage])


  return(
  <div className='tetris-container' role="button" tabIndex="0" onKeyDown={e=> move(e)} >

    <div className='tetris-app'>
      
      <Stage stage={stage}  />
      
      <aside>
        {isUserLogged ? <Display text1="User : " text2={userInfo.user}/>  : null}
        <Display text1="Time : " text2={timer}/>  
        <Display text1="Puntuacion : " text2={score}/>
        <Display text1="Lineas : " text2={rows}/>
        <Display text1="Level : " text2={level}/>
        
           
        <StartButton callback={startGame} />

      </aside>
     
    </div>
  </div>
  );
};

export default Tetris;
