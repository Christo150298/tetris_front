import { useCallback, useState } from "react";
import { TETROMINOS, randomTetromino } from "../components/Tetris/Tetrominos";
import { STAGE_WIDTH } from "../utils/gameHelpers";
import { checkCollision } from "../utils/gameHelpers";


export const usePlayer=()=>{

//Estado inicial del jugador
 const [player , setPlayer] = useState({
 pos: { x: 0, y: 0 },
 //funcion que hace que aparezca una figura aleatoriamente creada anteriormente en el archivo terominos
 tetromino: TETROMINOS[0].shape,
 //propiedad que hemos creado en falso
 collided: false,
 })

 const rotate = (matrix, dir) => {
  // Make the rows to become cols (transpose)
  const rotatedTetro = matrix.map((_, index) =>
    matrix.map(col => col[index]),
  );
  // Reverse each row to get a rotated matrix
  if (dir > 0) return rotatedTetro.map(row => row.reverse());
  return rotatedTetro.reverse();
};

const playerRotate = (stage, dir) => {
  const clonedPlayer = JSON.parse(JSON.stringify(player));
  clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

  const pos = clonedPlayer.pos.x;
  let offset = 1;
  while(checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
    clonedPlayer.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > clonedPlayer.tetromino[0].length) {
      rotate(clonedPlayer.tetromino, -dir);
      clonedPlayer.pos.x = pos;
      return;
    }
  }
  setPlayer(clonedPlayer);
};



const updatePlayerPos =({ x , y , collided})=>{
//posicion de la pieza actualizada
  setPlayer(prev => ({
...prev ,
pos: { x : (prev.pos.x + x ) , y: (prev.pos.y + y)},
collided, }))
}

//se usa useColback para no entrar en un bucle infinito una vez usemos useinterval
const resetPlayer = useCallback(() => {
  setPlayer({
    pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });
}, []);

  return {player, updatePlayerPos, resetPlayer, playerRotate};
}



