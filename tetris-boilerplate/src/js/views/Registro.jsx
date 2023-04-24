import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registro = () => {
    return(
        <Form className="container">
          <Form.Group className="m-3" controlId="formBasicEmail">
            <h3>Formulario de Registro</h3>
            <Form.Label className="mt-4">Introduce una direccion de correo:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label className="mt-4">Introduzca una contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Enter password"/>
            <Form.Label className="mt-4">Introduzca de nuevo la contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Enter password again"/>
          </Form.Group>
          <Button className="m-3" variant="success" type="submit">
            Registrarse
          </Button>
        </Form>
    );
};

export default Registro;