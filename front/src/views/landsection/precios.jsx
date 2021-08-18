import React from 'react';
import Tabla from '../../img/tabla.png';
import NuestrosPrecios from '../../img/nuestrosprecios.svg';
import SignoPeso from '../../img/signopeso.svg';
import Torta from '../../img/torta.svg';
import Cotiza from '../../img/cotiza.svg';
import DoubleLine from '../../img/doubleline.svg';

const Precios = props => {
    return (
        <div className="precios-cont text-center no-gutters">
            <h1 className="primtit">TRANSPARENCIA</h1>
            <p className="subprimtit">LO QUE NOS CARACTERIZA</p>
            <div className="grupo d-flex justify-content-center no-gutters">
                <img src={SignoPeso} alt="signopeso" className="signopeso" />
            </div>
            <img src={NuestrosPrecios} alt="nuestrosprecios" className="nuestrosprecios" />
            <br/>
            <img src={Tabla} alt="tabla" className="tabla" />
            <div className="condiciones text-center">
                <p className="mb-0">* Los juicios NO comprenden gastos judiciales.</p>
                <p className="mb-0 mt-n2">RECEPTORES y otros aplicables.</p>
                <p className="mb-0 mt-n2">* El anticipo comprende solo primera instancia</p>
            </div>
            <div className="juiord">
                <h1 className="primtit">JUICIOS ORDINARIOS DE<br></br>COBRO DE PESOS</h1>
                <p>DESDE $ 399.000 + % DE RECUPERO</p>
            </div>
            <img src={Torta} alt="torta" className="torta" />
            <br/>
            <img src={Cotiza} alt="cotiza" className="cotiza" />
            <br/>
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
        </div>
    );
}

export default Precios;