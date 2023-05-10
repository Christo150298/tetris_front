import React from "react";
import { Link } from "react-router-dom";
import "../styles/AcercaDe/acercaDe.css"

const AcercaDe = () => {
    return(
        <div className="indice-cont nes-container is-rounded is-dark col-6">
                <ul>
                    <li>
                        <h2 className="mt-3">Indice</h2>
                    </li>
                    <li>
                        <Link to="/acercaDe/queEsTetris">¿Qué es Tetris?</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/instrucciones">Como jugar Tetris: paso a paso</Link>
                     </li>
                    <li>
                        <Link to="/acercaDe/jugarOnline">Jugar Online</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/preguntasFrecuentes">Preguntas frecuentes durante una partida</Link>
                    </li>
                    <li>
                        <Link to="/acercaDe/sobreNosotros">Sobre Nosotros</Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/acercaDe/soporte">Ayuda</Link>
                    </li>
                </ul>
        </div>
    );
};

export default AcercaDe;