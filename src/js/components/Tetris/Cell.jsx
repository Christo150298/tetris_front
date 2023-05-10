import React from 'react';



const Cell = ({ type }) => (
    <div className={"tetromino-"+type} ></div>
)

export default Cell;