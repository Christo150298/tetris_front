import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../styles/jugar.css"

const Jugar = () => {
    return(
        <div className="jugar-styles container mt-5 gap-2">
            <ButtonGroup vertical>
                <Link to="/jugar/singleplayer">
                    <Button variant="dark">Singleplayer</Button>
                </Link>
                <Link to="/jugar/multiplayer">
                    <Button variant="dark">Multiplayer</Button>
                </Link>
            </ButtonGroup>
        </div>
            
    );
};

export default Jugar; 