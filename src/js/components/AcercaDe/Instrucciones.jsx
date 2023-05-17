import React from "react";
import "../../styles/AcercaDe/instrucciones.css"
import { useNavigate } from "react-router-dom";

const Instrucciones = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container mt-5 col-10 is-dark with-title d-flex ">
            <ul className="me-5"> 
                <ol>
                    <h3 className="mb-4 mt-3">Instrucciones para jugar al Tetris:</h3>
                </ol>
                <ol> Conoce las piezas: 
                    <p>
                        Las piezas se llaman tetriminos, las hay de 7 tipos diferentes: En primer Lugar tenemos la pieza cuadrada
                        luego las dos piezas en forma de L, cada una orientada a un lugar, luego las dos piezas que son como un cuadrado con la parte de arriba desplazada un lugar,
                        cada una orientada a un lado, tendremos una pieza con forma de triángulo que se puede poner en bastantes sitios y finalmente la pieza estrella que te salvará de apuros, la pieza con forma de palo recto.
                    </p>
                </ol> 
                <ol> Empiaza tranquilo y no cometas errores: 
                    <p>
                        En los primeros niveles las piezas caerán muy despacio, entonces tenemos que aprovechar para no cometer ningún error,
                        si cometemos un error puede que lo arrastremos toda la partida y cuando lleguen los niveles más difíciles tendremos líneas demasiado alto.
                        Mientras seas novato intenta eliminar líneas poco a poco dejándolo siempre bajo y no te preocupes demasiado de la puntuación.
                    </p>
                </ol>
                <ol> Maximiza los puntos: 
                    <p>
                        Cuando ya empieces a conocer bien la dinámica del juego debes empezar a conseguir más puntos, la gente lo que hace es rellenar todas las líneas menos una y conseguir una altura de 4 pisos,
                        cuando tengas 4 pisos metes un palo largo y entonces conseguirás lo que se llama un tetris que te da la máxima puntuación posible.También si pulsas el botón de caída rápida la puntuación aumentará.
                    </p>
                </ol>
                <ol> Ultimos niveles:
                    <p>
                        Esto es lo más dificil, las piezas caerán casi de forma instantánea y no nos darán ninguna tregua,
                        existe un pequeño truco que es pulsar el botón del giro de forma constante para que la pieza se pueda seguir moviendo,
                        hay que tocar deprisa el botón para evitar que se caiga, como siempre evita que se creen espacios y aguanta.
                    </p>
                </ol>
                <ol className="d-flex justify-content-end">
                    <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
                </ol>
            </ul>
        </div>
    );
};

export default Instrucciones;