
import React, { useEffect, useMemo, useState } from "react";

import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../utils/apiFetch.js";
import "../../styles/chat.css"
import useSocket from "../../hooks/useSocket.js";
import useAppContext from "../../store/context.js";
import Stage from "../Tetris/Stage.jsx";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";


const Multiplayer = () => {
    const { lobbyName } = useParams()
    const { messages, sendMessage, sendStage,remoteStages } = useSocket(lobbyName); 
    const navigate = useNavigate()
    const {store } = useAppContext()
    const { userInfo , isUserLogged } = store;
    const [ enemys, setEnemys] = useState([])



    const leaveLobby = async () => {
        apiFetch(`/api/lobbys/leave/${lobbyName}` , "GET", "", true)
        return
    }
    const joinLobby = async () => {
        const lobbyUsers = await apiFetch(`/api/lobbys/join/${lobbyName}` , "GET", "", true)
        if(lobbyUsers.message !== "ok") {
            alert(lobbyUsers.message)
            navigate("/jugar/multiplayer")
            return}
        setEnemys(lobbyUsers.data.player_list)
    }

    const refreshLobby = async () => {
        const lobbyUsers = await apiFetch(`/api/lobbys/get/${lobbyName}` , "GET", "", true)
        console.log(lobbyUsers.data.player_list)
        setEnemys(lobbyUsers.data.player_list)
    }

    useEffect(() => {
        if(!isUserLogged) {
            navigate("/jugar/multiplayer")
            return
        }

        const lobbyCheck = setInterval(() => {
            refreshLobby()
        }, 5000);
        
        joinLobby()

        window.addEventListener("beforeunload", leaveLobby);

        return ()=> {
        leaveLobby();
        window.removeEventListener("beforeunload", leaveLobby);
        clearInterval(lobbyCheck);
        }
    },[])

    const stageList = useMemo(()=>{
        console.log(enemys)
        const enemyStagesNames = enemys.filter(stageName => stageName !== userInfo.user)
        console.log(enemyStagesNames)
        const enemyStages = enemyStagesNames.map(stageName =>  { 
            if( !remoteStages[stageName] ) return { stage:null , userName:stageName }
            return { stage:remoteStages[stageName] , userName:stageName }})

        return enemyStages
    },[remoteStages,enemys])


    return (
        <div className="d-flex">
            <div>
                <Tetris room={lobbyName} sendStage={sendStage}/>
            </div>
            <aside>
                <div className="multiplayer-stage-container">
                    {stageList.length
                    ? stageList.map(stage => {
                        return <Stage key={stage.userName} stage={stage.stage} />
                    })
                    : <div className="d-block">
                        <div className="nes-container is-rounded is-dark">Esperando jugadores...</div> 
                        <UseAnimations className="mx-auto" animation={loading2} size={500} strokeColor="#EC7063" />
                        </div>
                    }

                </div>  
                <div className="multiplayer-chat-styles">
                    <Chat room={lobbyName} messages={messages} sendMessage={sendMessage} />
                </div>
            </aside>
        </div>
    );
};

export default Multiplayer;