import React from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/login.css"
import useFormInputs from "../hooks/useFormInputs";
import apiFetch from "../utils/apiFetch";
import { useNavigate } from "react-router-dom";
import useAppContext from "../store/context";

const Login = () => {
  const {userTextInputs, handleTextChangeInputs, handleChecksChangeInputs}  = useFormInputs({
    email: "",
    password: "",
    remember: false
    })
    
  const navigate = useNavigate()
  const { actions } = useAppContext()
  const { handleUserLogin } = actions


  const handleLogin = async () => {

    const remember = userTextInputs["remember"] ? userTextInputs["remember"] : false;

    const body ={
      email: userTextInputs["email"],
      password: userTextInputs["password"],
      remember

    }

    const response = await apiFetch("/api/login", "POST", body, false )

    if(!response["token"]){ 
      alert(response["message"])
      return }
    localStorage.setItem("token", response["token"] )
    handleUserLogin()
    navigate("/")
    
    return
  }


  const handleLostPassword = async () => {
    const body = {
      email: userTextInputs["email"],
    }

    const response = await apiFetch("/api/login", "POST", body, false )

    return
  }






    return (
        <Form className="login-styles nes-container is-rounded is-dark col-5">
          <Form.Group className="m-3">
            <h3>Inicio de Sesion</h3>
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control name="email" value={userTextInputs["email"]} onChange={handleTextChangeInputs} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={userTextInputs["password"]} onChange={handleTextChangeInputs} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Check name="remember" value={true} onChange={handleChecksChangeInputs} type="checkbox" label="Remember me" />

          </Form.Group>
          <div className="col-12">
            <button type="button" onClick={handleLogin} className="nes-btn is-primary m-3">Iniciar sesion</button>
            <a className="passwordForgot btn" href="http://">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </Form>
      );
}

export default Login;