import React from "react";
import { useNavigate } from "react-router-dom";

const JugarOnline = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container col-8 is-dark with-title mt-5">
            <p className="title">Jugar Online</p>
            <p>
                Jugar tetris online es una opcion muy real e inclusive la mas fuerte para disfrutar de una partida de este gran juego,
                ya que, a diferencia de jugar en solitario, jugar con un contrincante te pondra a prueba y exigira lo maximo posible para
                conseguir la victoria. Ademas es una muy buena opcion para jugar con amigos y mejorar a medida que mas partidas se hayan jugado.
            </p>
            <p className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
            </p>
        </div>
    );
};

export default JugarOnline;