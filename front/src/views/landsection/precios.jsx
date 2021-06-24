import React from 'react';
import Tabla from '../../img/tabla.svg';
import PersonaDos from '../../img/personados.png';
import SignoPeso from '../../img/signopeso.svg';
import DoubleLine from '../../img/doubleline.svg';

const Precios = props => {
    return (
        <div className="precios-cont text-center no-gutters">
            <h1>TRANSPARENCIA</h1>
            <p>LO QUE NOS CARACTERIZA</p>
            <div className="grupo d-flex justify-content-center no-gutters">
                <img src={PersonaDos} alt="personados" className="personados" />
                <img src={SignoPeso} alt="signopeso" className="signopeso" />
            </div>
            <h1 className="py-5">NUESTROS PRECIOS</h1>
            <img src={Tabla} alt="tabla" className="tabla" />
            <div className="condiciones text-center pt-3 pb-5">
                <p>* No incluye costas del juicio<br />* Juicios ordinarios<br />* Desde 12UF</p>
            </div>
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
        </div>
    );
}

export default Precios;