import React from 'react';
import Checkbox from '../../img/checkbox.svg';
import Onda from '../../img/onda.svg';
import DoubleLine from '../../img/doubleline.svg';
import COLogo from '../../img/cologo.png';
import PPLogo from '../../img/pplogo.png';

const Trabajamos = props => {
    return (
        <div className="trabajamos-cont no-gutters" id="trabajamos">
            <div className="top text-center no-gutters">
                <img src={DoubleLine} alt="doubleline" className="doubleline" />
                <img src={Checkbox} alt="Checkbox" className="checkbox" />
                <h1 className="primtit pt-5 pb-5">¿CÓMO TRABAJAMOS?</h1>
                <h4 className="subprimtitblack py-2">SOMOS PARTNER ESTRATÉGICOS DE COBRANZAONLINE</h4>
                <p className="subprimtit pt-2 pb-1">SI NO RECUPERAS EN LA ETAPA EXTRAJUDICIAL,<br></br>NOSOTROS CERRAMOS PROCESO DE COBRANZA!</p>
                <h1>ASÍ, TODO FLUJE DE MANERA ORGÁNICA</h1>
                <div className="flujo mx-auto">
                    <img src={COLogo} alt="cologo" className="cologo py-5" />
                    <img src={Onda} alt="onda" className="onda py-5" />
                    <img src={PPLogo} alt="pplogo" className="pplogo py-5" />
                </div>
            </div>
        </div>
    );
}

export default Trabajamos;