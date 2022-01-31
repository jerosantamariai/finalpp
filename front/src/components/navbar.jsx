import React from 'react';
// import { Link } from 'react-router-dom';
import LogoPP from '../img/logopp.png';

const Navbar = props => {
    return (
        <div>
            <div className='d-none d-md-block'>
                <nav class="navbar navbar-expand-lg navcolor">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a className="nav-item nav-link" href="/#quehacemos">QUÉ OFRECEMOS</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-item nav-link" href="/#trabajamos">CÓMO TRABAJAMOS</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-item nav-link" href="/#porque">PORQUÉ TRABAJAR JUNTOS</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-item nav-link" href="/#hablemos">CONTÁCTANOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='d-block d-md-none'>
                <div class="fixed-top" style={{ position: "static" }}>
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
        </div>

    );
}

export default Navbar;