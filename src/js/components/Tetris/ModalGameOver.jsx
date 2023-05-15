import React from "react";
import {Button, Modal} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import UseAnimations from "react-useanimations";
import Dropdown from 'react-bootstrap/Dropdown';
import facebook from "react-useanimations/lib/facebook"
import twitter from "react-useanimations/lib/twitter"
import "../../styles/Tetris/gameover.css"


const ModalGameOver = (props) => {

  const navigate = useNavigate()

    window.fbAsyncInit = function() {
      FB.init({
        appId: process.env.REACT_APP_FACEBOOK_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v16.0'
      });
      };

    function compartirPuntuacionFB() {
      FB.ui({
        method: 'share',
        href: 'http://tetris-online.ddns.net/',
        quote: '¡He obtenido una puntuación de ' + props.score + ' en Tetris Online!',
      }, function(response) {
        console.log(response);
      });
      };

      const msg = '¡He obtenido una puntuación de ' + props.score + ' en Tetris Online! A ver si me superas!'

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
          <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Compartir
          </Dropdown.Toggle>
          <Dropdown.Menu className="d-flex ms-1 bg-primary">
            <Dropdown.Item className="bg-primary" onClick={() => compartirPuntuacionFB()}>
              <UseAnimations animation={facebook} size={60} />
            </Dropdown.Item>
            <Dropdown.Item className="bg-primary" href={`https://twitter.com/intent/tweet?text=${msg}&url=http://tetris-online.ddns.net/`} target="_blank">
              <UseAnimations animation={twitter} size={60}/>
            </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
      </Modal>
    );
  };

export default ModalGameOver;