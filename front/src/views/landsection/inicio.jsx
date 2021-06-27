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
            <div className="middle ml-4 d-flex justify-content-center no-gutters">
                <div className="col-6 ml-5">
                        <img src={IsoPP} alt="isopp" className="isopp" />
                        <div className="some my-2  no-gutters">
                            <h1>COBRANZA JUDICIAL </h1>
                            <h1>de facturas, cheques, pagarés, etc</h1>
                        </div>
                    <div className="restotexto ml-5">
                        <div className="mt-4">
                        <p className="mb-0">PROTEGEMOS TU PYME Y TE AYDUAMOS EN LOS</p>
                        <p className="mb-0">PROCESOS DE COBRANZA</p>
                        <p className="mb-0">SI NO RECUPERAS, ¡NO PAGAS!</p>
                        </div>
                        <h1 className="mb-3">¡RECUPERA TU DINERO!</h1>
                        <img src={DoubleLine} alt="doubleline" className="doubleline pt-4 pb-5" />
                        <p>TIENES DERECHO A COBRAR JUDICIALMENTE LO<br />QUE NO TE PAGARON. ¡PRUEBA CON NOSOTROS!</p>
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