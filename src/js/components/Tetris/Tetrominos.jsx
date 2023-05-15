export const TETROMINOS = {
    0: { shape: 
      [
        [0]
      ]},
    I: {
      shape: [
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0], 
        [0, 'I', 0, 0]
      ]},
    J: {
      shape: [
        [0, 'J', 0], 
        [0, 'J', 0],
        ['J', 'J', 0]
        ]},
    L: {
      shape: [
        [0, 'L', 0],
        [0, 'L', 0], 
        [0, 'L', 'L']
        ]},
    O: {
      shape: [
        [0,0,0,0],
        [0,'O', 'O',0], 
        [0,'O', 'O',0],
        [0,0,0,0]
      ]},
    S: {
      shape: [
        [0, 'S', 'S'], 
        ['S', 'S', 0], 
        [0, 0, 0]
      ]},
    T: {
      shape: [
        [0, 0, 0], 
        ['T', 'T', 'T'], 
        [0, 'T', 0]
      ]},
    Z: {
      shape: [
        ['Z', 'Z', 0],
        [0, 'Z', 'Z'],
        [0, 0, 0]
      ]},
  };

  //Esta funcion selecciona aleatoriamente una letra del string que coincide con las keys del objeto tetrominos y lo recoje y que usaremos en usePlayer
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };
  