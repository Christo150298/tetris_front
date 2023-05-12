import React from "react";
import UseAnimations from "react-useanimations";
import playPause from "react-useanimations/lib/playPause"
import "../../styles/Tetris/pause.css"

const PauseButton = (props) => {
    return(
         <UseAnimations className="btn btn-dark" animation={playPause} size={50} onClick={props.handlePause}/>
    );
};

export default PauseButton;