import React from 'react';
import Checkbox from '../../img/checkbox.svg';
import Onda from '../../img/onda.svg';
import DoubleLine from '../../img/doubleline.svg';

const Trabajamos = props => {
    return (
        <div className="trabajamos-cont no-gutters">
            <div className="top text-center no-gutters">
                <img src={DoubleLine} alt="doubleline" className="doubleline" />
                <img src={Checkbox} alt="Checkbox" className="checkbox" />
                <h1 className="primtit pt-5 pb-4">¿CÓMO TRABAJAMOS?</h1>
                <h4 className="subprimtitblack">SOMOS PARTNER ESTRATÉGICOS DE COBRANZAONLINE</h4>
                <p className="subprimtit">SI NO RECUPERAS EN LA ETAPA EXTRAJUDICIAL,<br></br>NOSOTROS CERRAMOS PROCESO DE COBRANZA!</p>
                <h1>ASÍ, TODO FLUJE DE MANERA ORGÁNICA</h1>
                <img src={Onda} alt="onda" className="onda" />
            </div>
        </div>
    );
}

export default Trabajamos;