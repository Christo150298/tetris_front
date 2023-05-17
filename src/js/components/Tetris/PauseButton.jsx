import React from "react";
import UseAnimations from "react-useanimations";
import playPause from "react-useanimations/lib/playPause"
import "../../styles/Tetris/pause.css"

const PauseButton = (props) => {
    return(
         <UseAnimations className="tetris-startbutton w-40" strokeColor="#fff" animation={playPause} size={80} onClick={props.handlePause}/>
    );
};

export default PauseButton;