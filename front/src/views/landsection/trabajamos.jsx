import React from 'react';
import Copp from '../../img/copp.png';
import Ondas from '../../img/ondas.svg';
import CheckBox from '../../img/checkbox.svg';

const Trabajamos = props => {
    return (
        <div className="trabajamos-cont no-gutters">
            <div className="top text-center no-gutters">
                <img src={CheckBox} alt="checkbox" className="img-checkbox" />
                <h1 className="pt-5 pb-4">¿CÓMO TRABAJAMOS?</h1>
                <p className="mb-0">JUNTO A <b>COBRANZA ONLINE</b> SOMOS PARTNERS ESTRATÉGICOS.</p>
                <p>NOSOTROS CERRAMOS EL CICLO Y NOS PREOCUPAMOS DE LOS ÚLTIMOS DETALLES!</p>
                <img src={Copp} alt="copp" className="copp py-5 mt-2 mb-4" />
                <h1>ASÍ, TODO FLUJE DE MANERA ORGÁNICA</h1>
                <img src={Ondas} alt="ondas" className="ondas my-5" />
            </div>
        </div>
    );
}

export default Trabajamos;