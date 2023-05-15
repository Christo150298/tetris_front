import React from "react";



const Lobby = ({title, players, action , createGame=false,onButton=null}) => {
    return(
        <div className="lobbys-styles">

           
            {
                !createGame 
                ?<h6 className="title text-center">{title}</h6>
                :<input className="lobby-name-input" type="text" placeholder="Crear partida" name="lobbyName" onChange={action}/>
            }
            

            <div className="text-center">{players} / 4</div>
            
            
            {
                !createGame 
                ?<button className="nes-btn is-primary" onClick={action}>Unirse</button>
                :<button className="nes-btn is-primary" onClick={onButton}>Crear</button>
            }


        </div>
    );
};

export default Lobby;