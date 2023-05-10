import React from 'react';


const Display = ({text2,text1 }) => {

  

return (
  <div className="tetris-display d-block text-center" >
    <div>{text1}</div>
    <div> {text2}</div>
  </div>
)}

export default Display;