import React from 'react';
import { Link } from 'react-router-dom';

const EnviarCorreo = props => {
    return (
        <div className='sendcont text-center px-3'>
            <h1 className="mailSended my-5">
                CORREO ENVIADO, NOS CONTACTAREMOS PRONTO!
            </h1>
            <Link className="btn btn-success my-5" to="/">Volver a principal</Link>
        </div>
    );
}

export default EnviarCorreo;