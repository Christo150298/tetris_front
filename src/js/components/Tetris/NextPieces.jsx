import React, {useMemo} from "react";

import Cell from "./Cell";
import "../../styles/Tetris/nextpieces.css"

const NextPieces = ({nextPieces}) => {
    console.log(nextPieces)

    function transformarPieza(array) {

      while (array.length < 4) {
        array.push([]);
      }
      
      for (let i = 0; i < array.length; i++) {
        while (array[i].length < 4) {
          array[i].push(0);
        }
      }
      
      return array;
    }

    const firstPiece = useMemo(() => {
        if (!nextPieces[0]) return
      return transformarPieza(nextPieces[0])}, [nextPieces]);

      const secondPiece = useMemo(() => {
        if (!nextPieces[1]) return
      return transformarPieza(nextPieces[1])}, [nextPieces]);

      const thirdPiece = useMemo(() => {
        if (!nextPieces[2]) return
      return transformarPieza(nextPieces[2])}, [nextPieces]);
      
      const fourthPiece = useMemo(() => {
        if (!nextPieces[3]) return
      return transformarPieza(nextPieces[3])}, [nextPieces]);


    return (
      <div className="next-pieces-styles">

        <h5>Siguiente Pieza</h5>
        <div className="all-pieces">
          <div className="next-pieces-container mt-1">
          {
            firstPiece && firstPiece.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
          }
          </div>
          <div className="next-pieces-container  mt-1">
          {
            thirdPiece && thirdPiece.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
          }
          </div>
          <div className="next-pieces-container  mt-1">
          {
            fourthPiece && fourthPiece.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
          }
          </div>
          <div className="next-pieces-container mt-1">
          {
            secondPiece && secondPiece.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
          }
          </div>
        </div>




      </div>
    );
  };
  
  export default NextPieces;