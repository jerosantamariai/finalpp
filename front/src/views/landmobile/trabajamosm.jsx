import React from 'react';
import Checkbox from '../../img/checkbox.svg';
import Onda from '../../img/onda.svg';
import DoubleLine from '../../img/doubleline.svg';
import COLogo from '../../img/cologo.png';
import PPLogo from '../../img/pplogo.png';

const TrabajamosM = props => {
    return (
        <div className="trabajamosM no-gutters" id="trabajamos">
            <div className="text-center no-gutters">
                <img src={DoubleLine} alt="doubleline" className="doubleline" />
                <img src={Checkbox} alt="Checkbox" className="checkbox" />
                <h1 className="primtit pt-5 pb-4">¿CÓMO TRABAJAMOS?</h1>
                <h4 className="subprimtitblack">SOMOS PARTNER ESTRATÉGICOS DE COBRANZAONLINE</h4>
                <p className="subprimtit">SI NO RECUPERAS EN LA ETAPA EXTRAJUDICIAL,<br></br>NOSOTROS CERRAMOS PROCESO DE COBRANZA!</p>
                <div className="flujo my-3">
                    <h1 className='my-1'>ASÍ, TODO FLUJE DE MANERA ORGÁNICA</h1>
                    <img src={COLogo} alt="cologo" className="cologo" />
                    <img src={Onda} alt="onda" className="onda" />
                    <img src={PPLogo} alt="pplogo" className="pplogo" />
                </div>
            </div>
        </div>
    );
}

export default TrabajamosM;