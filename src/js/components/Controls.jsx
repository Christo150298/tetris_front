import React from "react";
import "../styles/controls.css";
import ModalControls from "./ModalControl";
import useControls from "../hooks/useControls";
import {useNavigate} from "react-router-dom";

const Controls = () => {
  const navigate = useNavigate();
  const { handleRestoreDefault } = useControls();

  const handleExit = () => {
    navigate("/")
  }

  const handleDefault = () => {
    handleRestoreDefault()
    navigate("/options")
  }

  return (
    <>
      <div className="nes-container with-title is-dark controls-container py-2">

        <div className="mx-auto w-75">
          <div className="col text-center">Rotar pieza :</div>
          <ModalControls
          
            modalName="rotateModal"
            searchedKey="rotateButton"
            text="ROTAR PIEZA"
          />
        </div>

        <div className="mx-auto w-75">
          <div className="col text-center">Mover a la izquierda :</div>

          <ModalControls
            modalName="moveLeftModal"
            searchedKey="moveLeftButton"
            text="DESPLAZAR PIEZA A LA IZQUIERDA"
          />

        </div>

        <div className="mx-auto w-75">
          <div className="col text-center">Mover a la derecha :</div>

          <ModalControls
            modalName="moveRightModal"
            searchedKey="moveRightButton"
            text="DESPLAZAR PIEZA A LA DERECHA"
          />

        </div>

        <div className="mx-auto w-75">
          <div className="col text-center">Bajar la pieza :</div>

          <ModalControls
            modalName="moveDownModal"
            searchedKey="moveDownButton"
            text="DESPLAZAR PIEZA ABAJO"
          />

        </div>

        <div className="mx-auto w-75">
          <div className="col text-center">Pause (Solo funciona en solitario):</div>

          <ModalControls
            modalName="pauseModal"
            searchedKey="pauseButton"
            text="PAUSAR (SOLO FUNCIONA EN MODO UN JUGADOR)"
          />
          
        </div>
        
        

      </div>

      <div className="mx-auto my-5 opciones-controles">
          <button className="mx-5 nes-btn is-error" onClick={handleExit}> VOLVER </button>
          <button className="mx-5 nes-btn is-warning" onClick={handleDefault}> PREDETERMINADAS </button>
        </div>
    </>
  );
};

export default Controls;
