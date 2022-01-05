import React from 'react';
import Tabla from '../../img/tabla.png';
import NuestrosPrecios from '../../img/nuestrosprecios.svg';
import SignoPeso from '../../img/signopeso.svg';
// import Torta from '../../img/torta.svg';
import Cotiza from '../../img/cotiza.svg';
import DoubleLine from '../../img/doubleline.svg';
import LightBulb from '../../img/lightbulb.png';

const Precios = props => {
    return (
        <div className="precios-cont no-gutters">
            <div className="preciostitulo">
                <h1 className="primtit">TRANSPARENCIA</h1>
                <p className="subprimtit">LO QUE NOS CARACTERIZA</p>
                <img src={SignoPeso} alt="signopeso" className="signopeso" />
            </div>
            <img src={NuestrosPrecios} alt="nuestrosprecios" className="nuestrosprecios" />
            <br />
            <img src={Tabla} alt="tabla" className="tabla" />
            <div className="condiciones text-right">
                <p className="condtext mb-2">* Los juicios NO comprenden gastos judiciales. RECEPTORES y otros aplicables.</p>
                <p className="condtext mb-0 mt-n2">* El anticipo comprende solo primera instancia</p>
            </div>
            <div className="juiord">
                <img src={LightBulb} alt="lightbulb" className="lightbulb" />
                <h1 className="primtit">JUICIOS ORDINARIOS DE<br></br>COBRO EN UF</h1>
                <p className="primit2">DESDE $ 399.000 + % DE RECUPERO</p>
                <br />
                <img src={Cotiza} alt="cotiza" className="cotiza" />
            </div>
            {/* <img src={Torta} alt="torta" className="torta" /> */}
            <br />
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
        </div>
    );
}

export default Precios;