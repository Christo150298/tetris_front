import React, { useEffect, useState } from "react";
import Lobby from "./Lobby";
import Chat from "../Chat";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import apiFetch from "../../utils/apiFetch";
import useFormInputs from "../../hooks/useFormInputs";
import "../../styles/lobby.css"
import useSocket from "../../hooks/useSocket";



const Mylobbys = () =>{
    const navigate = useNavigate()
    const [lobbyList, setLobbyList] = useState([])
    const { userTextInputs, handleTextChangeInputs } = useFormInputs({
        lobbyName: ""})

    const { socket , messages , sendMessage} = useSocket("Lobby")

    useEffect(()=>{
        console.log(lobbyList)
    },[lobbyList])

 
    
    const refreshLobbys = async () => {
        const lobbyss = await apiFetch("/api/lobbys" , "GET", "", false)
        setLobbyList(lobbyss.data)
        return
    }


    const createLobby = async (title) => {
        if (userTextInputs.lobbyName.length <1) return
        const lobbyss = await apiFetch(`/api/lobbys/create/${title}` , "GET", "", true)
        if(lobbyss.message !== "ok") {
            alert(lobbyss.message)
            return}

        setLobbyList(lobbyss.data)
        navigate(`/jugar/multiplayer/${userTextInputs.lobbyName}`)
    }




    useEffect(()=>{
        refreshLobbys()
    },[])

    return(
        <div className="nes-container is-dark is-rounded w-75 mt-5">
            <div className="lobby-wraper">
                <div className="lobby-container">
                    
                    
                    { 
                        lobbyList.length
                        ? lobbyList.map((lobby,index) => {
                                return(<Lobby key={index} title={lobby.title} action={()=>navigate(lobby.title)} players={lobby.players} />)})
                        : null
                    }

                    {
                        lobbyList.length < 8
                        ? <Lobby title="" action={handleTextChangeInputs} onButton={()=>createLobby(userTextInputs.lobbyName)} players="0" createGame={true} />
                        : null
                    }
  
                </div>
                <aside className="lobby-chat">
                    <Chat  room="searchLobby" messages={messages} sendMessage={sendMessage} />
                </aside>
            </div>
            <footer className="ranking d-flex justify-content-center">
                
                <button onClick={refreshLobbys}>Refresh Lobbys</button>
                <Link to="ranking">
                    <Button variant="dark">
                        <h6 className="mt-2">Top Mundial</h6>
                    </Button>
                </Link>
            </footer>
        </div> 
    );
};
        
export default Mylobbys;
