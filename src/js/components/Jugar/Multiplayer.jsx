
import React, { useEffect, useMemo } from "react";

import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../utils/apiFetch.js";
import "../../styles/chat.css"
import useSocket from "../../hooks/useSocket.js";
import useAppContext from "../../store/context.js";
import Stage from "../Tetris/Stage.jsx";


const Multiplayer = () => {
    const { lobbyName } = useParams()
    const { messages, sendMessage, sendStage,remoteStages } = useSocket(lobbyName); 
    const navigate = useNavigate()

    const {store } = useAppContext()
    const { userInfo , isUserLogged } = store;


    const leaveLobby = async () => {
        apiFetch(`/api/lobbys/leave/${lobbyName}` , "GET", "", false)
        return
    }
    const joinLobby = async () => {
        const lobbyss = await apiFetch(`/api/lobbys/join/${lobbyName}` , "GET", "", false)
        if(lobbyss.message !== "ok") {
            alert(lobbyss.message)
            navigate("/jugar/multiplayer")
            return}
    }

    useEffect(() => {
        console.log("join lobby")
        joinLobby()

        window.addEventListener("beforeunload", leaveLobby);

        return ()=> {
        leaveLobby();
        window.removeEventListener("beforeunload", leaveLobby);
        }
    },[])

    const stageList = useMemo(()=>{
        console.log(Object.keys(remoteStages))
        return Object.keys(remoteStages)
    },[remoteStages])


    return (
        <div className="d-flex">
            <div>
                <Tetris room={lobbyName} sendStage={sendStage}/>
            </div>
            <aside>
                {/* { stageList
                ? stageList.forEach((key) => { */}
                    {/* return <div ><span></span><Stage  stage={remoteStages["key"].stage}/></div> */}
                {/* }
                ) */}
                {/* : <span>Esperando jugadores...</span>
                } */}
                <div className="multiplayer-chat-styles">
                    <Chat room={lobbyName} messages={messages} sendMessage={sendMessage} />
                </div>
            </aside>
        </div>
    );
};

export default Multiplayer;