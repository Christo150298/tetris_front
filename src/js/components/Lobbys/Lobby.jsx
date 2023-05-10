import React from "react";



const Lobby = ({title, players, action , createGame=false,onButton=null}) => {
    return(
        <div className="lobbys-styles">

           
            {
                !createGame 
                ?<h6 className="title">{title}</h6>
                :<input type="text" placeholder="Crear partida" name="lobbyName" onChange={action}/>
            }
            

            <p>{players} / 4</p>
            
            
            {
                !createGame 
                ?<button className="btn btn-primary" onClick={action}>Unirse</button>
                :<button className="btn btn-primary" onClick={onButton}>Crear</button>
            }


        </div>
    );
};

export default Lobby;