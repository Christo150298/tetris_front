import React from 'react';
import Cell from './Cell';

const Stage = ({ stage, id }) => (
  <div className='tetris-stage'> { id }
   {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
