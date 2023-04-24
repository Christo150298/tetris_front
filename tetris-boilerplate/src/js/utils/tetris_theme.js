import tetrisTheme from "../assets/sounds/Tetris-theme.mp3"

const Tetris_Theme = new Audio(tetrisTheme)


export const getVolumeMusic = () => {
    const localVolume = localStorage.getItem("BGvolume")
    if (localVolume) return Number(localVolume)
    return 0.5
}



export default Tetris_Theme;
