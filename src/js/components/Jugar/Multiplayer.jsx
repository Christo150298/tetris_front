
import React, { useEffect, useMemo } from "react";

import Tetris from "../Tetris/Tetris.jsx";
import Chat from "../Chat";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../utils/apiFetch.js";
import "../../styles/chat.css"


const Multiplayer = () => {

    const navigate = useNavigate()

    const { lobbyName } = useParams()


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

        window.addEventListener("leaveLobby", leaveLobby);

        return ()=> {
        leaveLobby();
        window.removeEventListener("leaveLobby", leaveLobby);
        }
    },[])


    return (
        <div className="d-flex">
            <div>
                <Tetris />
            </div>
            <div className="multiplayer-chat-styles">
                <Chat room={lobbyName} />
            </div>
        </div>
    );
};

export default Multiplayer;