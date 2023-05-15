import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "../styles/jugar.css"

const Jugar = () => {
    return(
        <div className="jugar-styles container mt-5 gap-2">
            <div></div>
            <ButtonGroup vertical>
                <Link to="/jugar/singleplayer">
                    <label>
                        <button type="radio" className="nes-radio is-dark"></button>
                        <span>Singleplayer</span>
                    </label>
                </Link>
                <Link to="/jugar/multiplayer">
                    <label>
                        <button type="radio" class="nes-radio is-dark">Multiplayer</button>
                        <span>Multiplayer</span>
                    </label>
                </Link>
            </ButtonGroup>
        </div>
            
    );
};

export default Jugar; 


<label>
<input type="radio" class="nes-radio is-dark" name="answer-dark" />
<span>Singleplayer</span>
</label>