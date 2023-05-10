import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AcercaDe/soporte.css"

const Soporte = () => {

    const navigate = useNavigate()

    return(
        <div className="soporte-styles nes-container is-dark col-8 mt-5">
            <h4 className="support-h3-styles">¿Hay algún inconveniente con la web?</h4>
            <p className="mt-4">
                Si existe un fallo o hay algo que mejorarias en nuestra web no dudes en contactar con nosotros. Estamos abiertos
                a todo tipo de sugerencias que puedan mejorar el tetris, tanto esteticamente como logicamente.
            </p>
            <label for="textarea_field">Envianos tus sugerencias</label>
            <textarea id="textarea_field" class="nes-textarea"></textarea>
            <div className="d-flex justify-content-end">
                <button type="button" class="nes-btn is-primary">Enviar</button>
                <button type="button" class="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
            </div>
        </div>
    );
};

export default Soporte;