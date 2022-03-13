import React from 'react';
import DoubleLine from '../../img/doubleline.svg';
// import Button from '../../img/contactanosbutton.svg';
import PersonaUno from '../../img/personauno.svg';
import Cruces from '../../img/cruces.svg';
import Partner from '../../img/partnerCO.png';

const Inicio = props => {
    return (
        <div className="cont-inicio no-gutters">
            {/* <div className="test"></div> */}
            <div className="middle ml-4 py-5 d-flex justify-content-center no-gutters">
                <div className="col-6 ml-5">
                    <h1 className="primtit">ABOGADOS<br></br>100% ONLINE</h1>
                    <h5 className="primsubtit">AYUDAMOS A TU PYME DE MANERA<br></br>SIMPLE, CERCANA Y RAPIDA!</h5>
                    {/* <img src={Button} alt="contactbutton" className="contactbutton" /> */}
                    <a className='btn btncolor' href="#hablemos" >CONTÁCTANOS</a>
                    <br></br>
                    <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
                </div>
                <div className="col-3 d-flex align-bottom">
                    <img src={PersonaUno} alt="personauno" className="personauno" />
                </div>
                <img src={Partner} alt="partner" className="partner" />
            </div>
            <div className="last" id="quehacemos">
                <img src={Cruces} alt="cruces" className="cruces" />
                <h1 className="primtit">COBRANZA JUDICIAL</h1>
                <h2 className="subprimtit">de Facturas, cheques, pagarés y otros títulos</h2>
                <h3 className="subtit">PROTEGEMOS TU PYME Y TE AYUDAMOS EN LOS</h3>
                <h3 className="subtit">PROCESOS DE COBRANZAS.</h3>
            </div>
        </div>
    );
}

export default Inicio;