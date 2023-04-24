import React from "react";
import { Link } from "react-router-dom"
import SoundOptions from "../components/SoundOptions.jsx";

const Options = () => {
  return (
    <div className="container text-center p-5">
      <h1 className="mb-5"> OPCIONES </h1>
      <div className="w-75 mx-auto">
        <div className="my-5"> PLACE HOLDER INICIAR SINGLEPLAYER </div>
        <div className="my-5"> PLACE HOLDER INICIAR MULTIPLAYER </div>
        <div className="my-5"> PLACE HOLDER VER MI PERFIL </div>
        <div className="my-5"> <SoundOptions/> </div>
        <Link to="/options/controls"> CONTROLES DEL JUEGO </Link>
      </div>
    </div>
  );
};

export default Options;
