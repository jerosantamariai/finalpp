import React from 'react';
import DoubleLine from '../../img/doubleline.svg';
import IsoPP from '../../img/isopp.png';
import Button from '../../img/button.svg';
import PersonaUnoCruces from '../../img/personaunocruces.png';
// import Cruces from '../../img/cruces.svg';

const Inicio = props => {
    return (
        <div className="cont-inicio pb-5 no-gutters">
            <div className="top text-center py-3 no-gutters">
                <h1>ABOGADOS 100% ONLINE</h1>
                <h5>AYUDAMOS A TU PYME DE MANERA SIMPLE, CERCANA Y RAPIDA!</h5>
                <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
            </div>
            <div className="middle d-flex justify-content-center no-gutters">
                <div className="col-6 ml-5">
                    <div className="some d-flex my-2 no-gutters">
                        <img src={IsoPP} alt="isopp" className="isopp" />
                        <h1>COBRANZA JUDICIAL<br/>de facturas, cheques, pagarés, etc</h1>
                    </div>
                    <div className="restotexto ml-5">
                        <p>PROTEGEMOS TU PYME Y TE AYDUAMOS EN LOS<br/>PROCESOS DE COBRANZA<br/>SI NO RECUPERAS, ¡NO PAGAS!</p>
                        <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
                        <h1 className="mb-3">¡RECUPERA TU DINERO!</h1>
                        <p>TIENES DERECHO A COBRAR JUDICIALMENTE LO<br/>QUE NO TE PAGARON. ¡PRUEBA CON NOSOTROS!</p>
                        <img src={Button} alt="button" className="button mt-4" />
                    </div>
                </div>
                <div className="col-3 d-flex align-bottom">
                    <img src={PersonaUnoCruces} alt="personauno" className="personauno" />
                </div>
            </div>
        </div>
    );
}

export default Inicio;