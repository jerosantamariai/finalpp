import React from 'react';
// import { Link } from 'react-router-dom';
import LogoPP from '../img/logopp.png';

const Navbar = props => {
    return (
        <div>
            <div class="fixed-top" style={{position: "static"}}>
                <nav class="navbar navcolor">
                    <a className="navbar-brand" href="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div class="collapse" id="collapseExample">
                    <div class="navcolor p-4">
                        <a className="nav-item nav-link" href="/#quehacemos">QUÉ OFRECEMOS</a>
                        <a className="nav-item nav-link" href="/#trabajamos">CÓMO TRABAJAMOS</a>
                        <a className="nav-item nav-link" href="/#porque">PORQUÉ TRABAJAR JUNTOS</a>
                        <a className="nav-item nav-link" href="/#hablemos">CONTÁCTANOS</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;