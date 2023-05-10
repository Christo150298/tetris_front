import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AcercaDe/preguntasFrecuentes.css"

const PreguntasFrecuentes = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container col-8 is-dark mt-5">
            <ul className="me-5">
                <ol>
                    <h4 className="mb-4 mt-3">Preguntas frecuentes durante una partida</h4>
                </ol>
                <ol> ¿Puedo observar como juegan mis contrincantes?
                    <p className="mt-2">
                        Si, una de las caracteristicas de nuestra aplicacion es que vamos a poder jugar hasta 4 en una lobby,
                        pero que esto no suponga una distraccion de tu principal objetivo que es hacer el maximo de lineas posibles
                        para poder ganar.
                    </p>
                </ol>
                <ol> ¿Puede haber empate en el Tetris?
                    <p className="mt-2">
                        No, esto es un duelo a muerte y el ultimo en pie sera el vencendor.
                    </p>
                </ol>
                <ol> ¿Puedo acomodar las piezas a mi gusto?
                    <p className="mt-2">
                        Por supuesto, no hay una sola respuesta exacta para resolver el juego de Tetris,
                        lo único que siempre debes tener claro es que no importa cómo acomodes las piezas, 
                        lo que si es vital es que hagas el mayor numero posible de lineas.
                    </p>
                </ol>
                <ol className="d-flex justify-content-end">
                    <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
                </ol>
            </ul>
        </div>
    );
};

export default PreguntasFrecuentes;