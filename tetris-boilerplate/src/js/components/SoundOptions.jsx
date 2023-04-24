import React, { useEffect } from "react";
import UseAnimations from "react-useanimations";
import volumeAnimation from "react-useanimations/lib/volume";

import useSounds from "../hooks/useSounds";

const SoundOptions = () => {
    const { volume , musicPlaying , handleVolume , handlePlayBGMusic } = useSounds();


    return (
        <div>
            <div className="my-2" >
                <button className="bgm-button" onClick={handlePlayBGMusic}>
                    { musicPlaying 
                    ? <i className="fas fa-volume-up"></i>
                    : <i className="fas fa-volume-mute"></i>}
                </button>
            </div>
            <div >
                <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={event => handleVolume(event.target.valueAsNumber)}
                />
            </div>

        </div>)
}

export default SoundOptions;