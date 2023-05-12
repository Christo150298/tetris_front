import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AcercaDe/sobreNosotros.css"

const SobreNosotros = () => {

    const navigate = useNavigate()

    return(
        <div className="nes-container col-10 is-dark mt-5">
            <h3 className="h3-styles d-flex justify-content-start">¿Quienes Somos?</h3>
            <p className="mt-3">
                Tetris online nace de la idea de un estudiante de 4Geeks Academy que junto a un par de compañeros
                consiguieron construir esta web. Es un proecto con mucha dedicacion y horas que esperemos sea del agrado
                de los fans de tetris y todo aquel que quiera echar unas partiditas para pasar el rato.
            </p>
            <h4 className="h4-styles mt-3">Miembros del equipo</h4>
            <div className="coreteam-members mt-3 row d-flex justify-content-center">
                <section className="nes-container is-dark member-card col-3">
                    <div className="profile">
                        <h5>
                            Dany AKA StromcerOner
                        </h5>
                    </div>
                    <div>
                        <a href="https://github.com/stromcer" target="_blank" rel="noreferrer" aria-label="github">
                            <i className="nes-icon github"></i>
                        </a>
                    </div>
                </section>
                <section className="nes-container is-dark member-card col-3">
                    <div className="profile">
                        <h5>
                            Christopher Alvarez
                        </h5>
                    </div>
                    <div>
                        <a href="https://github.com/Christo150298" target="_blank" rel="noreferrer" aria-label="github">
                            <i className="nes-icon github"></i>
                        </a>
                        <a className="ms-2" href="https://www.instagram.com/christopher_glr" target="_blank" rel="noreferrer" aria-label="instagram">
                            <i className="nes-icon instagram"></i>
                        </a>
                    </div>
                </section>
            </div>
            <p className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/acercaDe")}>Volver</button>
            </p>
        </div>
    );
};

export default SobreNosotros;