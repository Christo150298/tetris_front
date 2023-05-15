import React from 'react';
import Cell from './Cell';

const DEFAULT_STAGE = [
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']],
  [[0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear'], [0, 'clear']]
]


const Stage = ({ stage, id }) => (
  <div className='tetris-stage'> { id }
   { stage
   ? stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
   : DEFAULT_STAGE.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
   }

  </div>
);

export default Stage;



