import React from 'react';
import DoubleLine from '../../img/doubleline.svg';
import Button from '../../img/contactanosbutton.svg';
import PersonaUno from '../../img/personauno.svg';
import Cruces from '../../img/cruces.svg';

const Inicio = props => {
    return (
        <div className="cont-inicio no-gutters">
            <div className="middle ml-4 d-flex justify-content-center no-gutters">
                <div className="col-6 ml-5">
                    <h1 className="primtit">ABOGADOS<br></br>100% ONLINE</h1>
                    <h5 className="primsubtit">AYUDAMOS A TU PYME DE MANERA<br></br>SIMPLE, CERCANA Y RAPIDA!</h5>
                    <img src={Button} alt="contactbutton" className="contactbutton" />
                    <br></br>
                    <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
                </div>
                <div className="col-3 d-flex align-bottom">
                    <img src={PersonaUno} alt="personauno" className="personauno" />
                </div>
            </div>
            <div className="last">
                <img src={Cruces} alt="cruces" className="cruces" />
                <h1 className="primtit">COBRANZA JUDICIAL</h1>
                <h2 className="subprimtit">de Facturas, cheques, pagarés, etc</h2>
                <h3 className="subtit">PROTEGEMOS TU PYME Y TE AYUDAMOS</h3>
                <h3 className="subtit">EN LOS PROCESOS DE COBRANZAS.</h3>
            </div>
        </div>
    );
}

export default Inicio;