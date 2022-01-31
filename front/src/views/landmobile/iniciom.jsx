import React from "react";
// import Button from "../../img/button.svg";
import PersonaUno from "../../img/personauno.png";
import DoubleLine from "../../img/doubleline.svg";

const InicioM = props => {
    return (
        <div className="iniciomCont text-center my-5">
            <img src={PersonaUno} alt="personauno" className="personauno" />
            <h1 className="primtit">ABOGADOS<br></br>100% ONLINE</h1>
            <h5 className="primsubtit">AYUDAMOS A TU PYME DE MANERA<br></br>SIMPLE, CERCANA Y RAPIDA!</h5>
            {/* <img src={Button} alt="contactbutton" className="contactbutton" /> */}
            <a className='btn btncolor' href="#hablemos" >CONTÁCTANOS</a>
            <img src={DoubleLine} alt="doubleline" className="doubleline py-5" />
            <h1 className="primtit" id="quehacemos">COBRANZA JUDICIAL</h1>
            <h2 className="subprimtit">de Facturas, cheques,<br></br>pagarés y otros títulos</h2>
            <h3 className="subtit">PROTEGEMOS TU PYME<br></br>Y TE AYUDAMOS EN LOS<br></br>PROCESOS DE COBRANZAS.</h3>
        </div>
    );
}

export default InicioM