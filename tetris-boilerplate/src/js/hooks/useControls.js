import { useEffect, useState } from "react";
import getStoredControls from "../utils/getStoredControls";

const useControls = () => {
    const [modalsShows, setModalsShows] = useState({
        rotateModal: false,
        moveLeftModal: false,
        moveRightModal: false,
        moveDownModal: false,
        pauseModal: false
    })


    const [ buttonsMap, setButtonsMap ] = useState(getStoredControls())

    

    useEffect(()=>{
        setButtonsMap(getStoredControls())
    },[modalsShows])
    
    
    const handleOpenModal = (modalName) => setModalsShows( prev => ({...prev, [modalName]: true}));
    const handleCloseModal = (modalName) => setModalsShows( prev => ({...prev, [modalName]: false}) ) 
    const handleChangeButton = (button ,mappedKey) => setButtonsMap( prev => { 
        const new_buttons = {...prev, [button]: mappedKey }
        localStorage.setItem("buttonsMap", JSON.stringify(new_buttons))
        return new_buttons
        })
    const handleRestoreDefault = () => {
        localStorage.removeItem("buttonsMap")
        setButtonsMap(getStoredControls())
    }
    
    return({buttonsMap,modalsShows, handleOpenModal, handleCloseModal, handleChangeButton, handleRestoreDefault})
}

export default useControls;

