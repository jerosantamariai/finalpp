import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return(
        <div className="notfound">
            <h1>No hay nada aqui, vuelve al inicio</h1>
            <Link className="btn btn-success" to="/">Home</Link>
        </div>
    );
}

export default NotFound;