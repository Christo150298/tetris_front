import React, { createContext, useContext, useEffect, useState } from "react"
import Tetris_Theme from "../utils/tetris_theme.js"
import apiFetch from "../utils/apiFetch.js"




const Context = createContext()


export const ContextProvider = ({children}) => {

    const handleAppLogin = () => {
        const token = localStorage.getItem("token")
        return token !== null 
    }

    const [userInfo, setUserInfo] = useState()
    const [isUserLogged, setIsUserLogged] = useState(handleAppLogin())


    const handleStartTheme = () => {
        Tetris_Theme.play()
    }

    const handleUserLogin = () => {
        setIsUserLogged(handleAppLogin())
    }
    

    useEffect(() => {
        if(!isUserLogged) return ;

        const getInfo = async () => {
            const response = await apiFetch("/api/user/info","GET","",true)
            setUserInfo(response.data)
        }

        getInfo()
        
    }
    ,[isUserLogged])



    const store = {
        userInfo,
        isUserLogged
    }

    const actions = {
        handleStartTheme,
        handleUserLogin
    }
    

    return  <Context.Provider value={{store,actions,}}>
            {children}
            </Context.Provider>
}

const useAppContext = () => useContext(Context)

export default useAppContext;