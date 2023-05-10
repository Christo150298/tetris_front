//crea las columnas y las filas que quiere que contenga
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
  // esto hace que cada una de las celdas tenga ese valor
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );


  export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
      for (let x = 0; x < player.tetromino[y].length; x += 1) {
        // Comprueba que estamos en una celda Tetromino reall
        if (player.tetromino[y][x] !== 0) {
          if (
        //Comprobar que nuestro movimiento está dentro de la altura de las áreas de juego (y)
        // No debemos pasar por el fondo del área de juego 
            !stage[y + player.pos.y + moveY] ||
            // Comprueba que nuestra jugada está dentro del ancho de las áreas de juego (x)
            !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
            // Verifique que la celda a la que se está moviendo no esté configurada para borrar
            stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1]!=='clear'
      
          ) {
            return true;
          }
        }
      }
    }
  };