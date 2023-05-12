import {useState, useEffect} from "react"


const useFormInputs = (firstState) => {
    const [userTextInputs, setUserInputs] = useState(firstState)


    const handleTextChangeInputs = (e) => {
        
        setUserInputs( prev => {
            
            const newState = { ...prev, [e.target.name] : e.target.value }

            return newState
        })
    }

    const handleChecksChangeInputs = (e) => {
        setUserInputs( prev => {
            const newState = { ...prev, [e.target.name] : e.target.checked }
            return newState
        })

    }
    
    useEffect(()=>{
    },[userTextInputs])

    return({userTextInputs, handleTextChangeInputs, handleChecksChangeInputs})
}



export default useFormInputs;