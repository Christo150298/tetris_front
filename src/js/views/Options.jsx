import React from "react";
import { Link } from "react-router-dom"
import SoundOptions from "../components/SoundOptions.jsx";
import Controls from "../components/Controls.jsx";


const Options = () => {
  return (
    <div className="nes-container with-title col-8 mt-5 is-dark is-rounded text-center p-3">
      <span className="title"> OPCIONES </span>

      <div className="w-75 mx-auto">
        <div className="my-5"> <SoundOptions/> </div>
        <Controls />
      </div>

    </div>
  );
};

export default Options;
