import React from "react";
import {Button, Modal} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../../styles/Tetris/gameover.css"


const ModalGameOver = (props) => {

  const navigate = useNavigate()

    return (
      <Modal show={props.show} onHide={props.onHide} animation={false}>
        <Modal.Body>
        <Modal.Title>Game Over</Modal.Title>
          <h6>Puntacion: {props.score}</h6>
          <Button variant="dark" onClick={props.restart} >
            Reiniciar
          </Button>
          <Button variant="dark" onClick={() => navigate('/jugar')}>
            Salir
          </Button>
        </Modal.Body>
      </Modal>
    );
  };

export default ModalGameOver;