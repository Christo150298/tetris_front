import React from "react";
import "../../styles/AcercaDe/queEsTetris.css"
import { useNavigate } from "react-router-dom";

const QueEsTetris = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container mt-5 col-10 is-dark with-title">
            <p className="title">¿Qué es Tetris?</p>
            <p>
                Tetris es el revolucionario juego que movilizó al mundo desde su distribución.
                Consiste básicamente en ir colocando las figuras geométricas de tal manera que
                se forme una fila en la parte inferior de la pantalla con el fin de que se eliminen y a medida que
                se vayan eliminando, la puntuación aumentará. El juego termina cuando hayas llegado a la altura maxima permitida,
                por eso a medida que vayas eliminando filas, la velocidad de las piezas irá en aumento par a poner a prueba tus habilidades.
            </p>
            <p className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
            </p>
        </div>          
    )
}

export default QueEsTetris;