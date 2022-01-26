import React from 'react';
// import Submit from '../../img/submit.svg';
import DoubleLine from '../../img/doubleline.svg';
import Dialogo from '../../img/hablemos.svg';
import Form from '../../components/form';

const HablemosM = props => {
    return (
        <div className="hablemosM text-center" id="hablemos">
            <h1 className="primtit">HABLEMOS!</h1>
            <p className="subprimtit">QUEREMOS AYUDARTE</p>
            <img src={Dialogo} alt="dialogo" className="dialogo" />
            <div className="formulario col-10 offset-1">
                <Form />
            </div>
            <img src={DoubleLine} alt="doubleline" className="doubleline my-5 py-4" />
            {/* <h1>O CONTÁCTANOS</h1>
            <p className="endspace">ABOGADOS@PROTEGEPYME.COM</p> */}
        </div>
    );
}

export default HablemosM;