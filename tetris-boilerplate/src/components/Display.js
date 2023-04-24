import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';
const Display = ({ gameOver, text2,text1 }) => (
  <StyledDisplay gameOver={gameOver}>
    <div>{text1}</div>{text2}</StyledDisplay>
)

export default Display;