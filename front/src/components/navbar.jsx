import React from 'react';
import { Link } from 'react-router-dom';
import LogoPP from '../img/logopp.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navcolor no-gutters">
            <a className="navbar-brand" href="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex">
                    <a className="nav-item nav-link" href="/#quehacemos">QUÉ OFRECEMOS</a>
                    <a className="nav-item nav-link" href="/#trabajamos">CÓMO TRABAJAMOS</a>
                    <a className="nav-item nav-link" href="/#porque">PORQUÉ TRABAJAR JUNTOS</a>
                    <a className="nav-item nav-link" href="/#hablemos">CONTÁCTANOS</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;