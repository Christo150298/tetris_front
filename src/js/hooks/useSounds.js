import { useState, useMemo } from "react";
import Tetris_Theme, { getVolumeMusic } from "../utils/tetris_theme";




const useSounds = () => {
    const [ volume, setVolume ] = useState(getVolumeMusic());
    const [ musicPlaying, setMusicPlaying ] = useState(false)

    const handleVolume = volume => setVolume(volume);
    const handleMusicPlaying = () => setMusicPlaying(res => !res);


    Tetris_Theme.volume = useMemo(()=>{
        localStorage.setItem("BGvolume", String(volume))
        const BGplaying = JSON.parse(localStorage.getItem("BGplaying"))
        setMusicPlaying(BGplaying)

        return volume
    },[volume])

    

    const handlePlayBGMusic = () =>{
        setMusicPlaying(res =>{ 
            localStorage.setItem("BGplaying", JSON.stringify(!res))
            return !res})
        if (!musicPlaying){
            return Tetris_Theme.play()
        }
        else{
            return Tetris_Theme.pause()
        }
    }



    return({volume ,musicPlaying ,handleVolume ,handleMusicPlaying , handlePlayBGMusic})
}

export default useSounds;