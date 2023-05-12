import React from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { randomTetromino } from "./Tetrominos";
import "../../styles/Tetris/nextpieces.css"

const NextPieces = ({usePlayer}) => {

    const {nextPieces} = usePlayer();
  
    return (
      <div className="next-pieces-styles">
        <h6>Siguiente Pieza</h6>
        <div>
          {nextPieces.map((piece, index) => (
            <randomTetromino key={index} shape={piece.shape} color={piece.color} />
          ))}
        </div>
      </div>
    );
  };
  
  export default NextPieces;