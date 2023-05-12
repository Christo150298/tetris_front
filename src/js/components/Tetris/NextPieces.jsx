import React from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { randomTetromino } from "./Tetrominos";
import "../../styles/Tetris/nextpieces.css"

const NextPieces = ({usePlayer}) => {

    const {nextPieces} = usePlayer();
  
    return (
      <div className="next-pieces-styles">
        <h5>Siguiente Pieza</h5>
        <div>
          {nextPieces.map((piece, index) => (
            <randomTetromino key={index} shape={piece.shape} color={piece.color} />
          ))}
        </div>
      </div>
    );
  };
  
  export default NextPieces;