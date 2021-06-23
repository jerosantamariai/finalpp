import React from 'react';
import Copp from '../../img/copp.png';
import Ondas from '../../img/ondas.svg'

const Trabajamos = props => {
    return (
        <div className="trabajamos-cont">
            <div className="top text-center">
                <h1>¿CÓMO TRABAJAMOS?</h1>
                <p>JUNTO A <strong>COBRANZA ONLINE</strong> SOMOS PARTNERS ESTRATÉGICOS.</p>
                <p>NOSOTROS CERRAMOS EL CICLO Y NOS PREOCUPAMOS DE LOS ÚLTIMOS DETALLES!</p>
                <img src={Copp} alt="copp" className="copp" />
                <h1>ASÍ, TODO FLUJE DE MANERA ORGÁNICA</h1>
                <img src={Ondas} alt="ondas" className="ondas my-5" />
            </div>
        </div>
    );
}

export default Trabajamos;