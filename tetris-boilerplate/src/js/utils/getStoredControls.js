
const getStoredControls = () => {
    const storedControls = localStorage.getItem("buttonsMap")
    
    if ( storedControls ) return(JSON.parse(storedControls));
    
    return {
        rotateButton: {
        "key": "ArrowUp",
        "keyCode": 38,
        "code": "ArrowUp",
       },
       moveLeftButton: {
        "key": "ArrowLeft",
        "keyCode": 37,  
        "code": "ArrowLeft",
       },
       moveRightButton: {
        "key": "ArrowRight",
        "keyCode": 39,
        "code": "ArrowRight",
       },
       moveDownButton: {
        "key": "ArrowDown",
        "keyCode": 40,
        "code": "ArrowDown",
       },
       pauseButton: {
        "key": "p",
        "keyCode": 80,
        "code": "KeyP",
       }
    }

}

export default getStoredControls;
