import React from 'react';
import DoubleLine from '../../img/doubleline.svg';
import IsoPP from '../../img/isopp.png';
import Button from '../../img/button.svg';
import PersonaUno from '../../img/personauno.png';
import Cruces from '../../img/cruces.svg';

const Inicio = props => {
    return (
        <div className="cont-inicio pb-5">
            <div className="top text-center py-3">
                <h1>ABOGADOS 100% ONLINE</h1>
                <h5>AYUDAMOS A TU PYME DE MANERA SIMPLE, CERCANA Y RAPIDA!</h5>
                <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
            </div>
            <div className="middle d-flex">
                <div className="col-6 ml-5">
                <div className="some d-flex">
                    <img src={IsoPP} alt="isopp" className="isopp" />
                    <h1>COBRANZA JUDICIAL</h1>
                </div>
                <h5>de facturas, cheques, pagarés, etc</h5>
                <p>PROTEGEMOS TU PYME Y TE AYDUAMOS EN LOS</p>
                <p>PROCESOS DE COBRANZA</p>
                <p>SI NO RECUPERAS, ¡NO PAGAS!</p>
                <img src={DoubleLine} alt="doubleline" className="doubleline py-2" />
                <h1>¡RECUPERA TU DINERO!</h1>
                <p>TIENES DERECHO A COBRAR JUDICIALMENTE LO</p>
                <p>QUE NO TE PAGARON. ¡PRUEBA CON NOSOTROS!</p>
                <img src={Button} alt="button" className="button" />
                </div>
                <div className="col-6 d-flex">
                    <img src={PersonaUno} alt="personauno" className="personauno" />
                    <img src={Cruces} alt="cruces" className="cruces" />
                </div>
            </div>
        </div>
    );
}

export default Inicio;