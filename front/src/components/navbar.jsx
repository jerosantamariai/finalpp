import React from 'react';
// import { Link } from 'react-router-dom';
import LogoPP from '../img/logopp.png';

const Navbar = props => {
    return (
        <div>
            <div className='d-none d-md-block'>
                <nav className="navbar navbar-expand-lg navcolor">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-item nav-link" href="/#quehacemos">QUÉ OFRECEMOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link" href="/#trabajamos">CÓMO TRABAJAMOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link" href="/#porque">PORQUÉ TRABAJAR JUNTOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link" href="/#hablemos">CONTÁCTANOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='d-block d-md-none'>
                <div className="fixed-top" style={{ position: "static" }}>
                    <nav className="navbar navcolor">
                        <a className="navbar-brand" href="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <div className="collapse" id="collapseExample">
                        <div className="navcolor p-4">
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