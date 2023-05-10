import React from 'react';

const StartButton = ({ callback }) => (
  <button className="tetris-startbutton" onClick={callback}>Start Game</button>
)

export default StartButton;