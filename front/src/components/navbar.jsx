import React from 'react';
import { Link } from 'react-router-dom';
import LogoPP from '../img/logopp.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navcolor fixed-top no-gutters">
            <Link className="navbar-brand" to="/"><img src={LogoPP} alt="LogoPP" className="logoPP" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Features</Link>
                    <Link className="nav-item nav-link" to="/">Pricing</Link>
                </div>
            </div> */}
        </nav>
    );
}

export default Navbar;