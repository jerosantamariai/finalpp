import React from 'react';
import Table from '../../img/table.png';
import NuestrosPrecios from '../../img/nuestrosprecios.png';
import SignoPeso from '../../img/signopeso.svg';

import Cotiza from '../../img/cotiza.svg';
import DoubleLine from '../../img/doubleline.svg';
import LightBulb from '../../img/lightbulb.png';


const PreciosM = props => {
    return (
        <div className="preciosM text-center no-gutters">
            <div className="preciostitulo">
                <img src={SignoPeso} alt="signopeso" className="signopeso" />
                <h1 className="primtit">TRANSPARENCIA</h1>
                <p className="subprimtit">LO QUE NOS CARACTERIZA</p>
            </div>
            <div>
                <img src={NuestrosPrecios} alt="nuestrosprecios" className="nuestrosprecios" />
            </div>
            <br />
            <div className='tablecont'>
                <img src={Table} alt="table" className="table mx-auto" />
                <div className="condiciones text-right">
                    <p className="condtext mb-2">* En estos tramos, se ofrecen 2 alternativas:         <br></br>a) Tramitación completa del juicio.<br></br>b) Tramitación parcial para reducir los gastos.</p>
                    <p className="condtext mb-2">* Se calcula la UF referencial del día de contratación</p>
                    <p className="condtext mb-2">* Los servicios no comprenden gastos procesales de tramitación (receptores y otros aplicables)</p>
                    <p className="condtext mb-2">* *El valor del anticipo solo comprende  primera instancia.</p>
                </div>
            </div>
            <div className="juiord my-5">
                <h1 className="primtit">JUICIOS ORDINARIOS DE<br></br>COBRO EN UF</h1>
                <p className="primit2">DESDE $ 399.000 + % DE RECUPERO</p>
                <br />
                <img src={LightBulb} alt="lightbulb" className="lightbulb" />
                <img src={Cotiza} alt="cotiza" className="cotiza" />
            </div>
            <br />
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
        </div>
    );
}

export default PreciosM;