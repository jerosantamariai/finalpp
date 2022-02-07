import React from 'react';
// import Submit from '../../img/submit.svg';
import DoubleLine from '../../img/doubleline.svg';
import Dialogo from '../../img/hablemos.svg';
import Form from '../../components/form';

const Hablemos = props => {
    return (
        <div className="hablemos-cont text-center" id="hablemos">
            <div className="title text-center d-block">
                <h1 className="primtit">HABLEMOS!</h1>
                <p className="subprimtit">QUEREMOS AYUDARTE</p>
                <img src={Dialogo} alt="dialogo" className="dialogo" />
            </div>
            <div className="formulario col-6 offset-3">
                <Form />
            </div>
            <img src={DoubleLine} alt="doubleline" className="doubleline my-5 py-4" />
            <h1>O CONTÁCTANOS</h1>
            <p className="endspace">ABOGADOS@PROTEGEPYME.COM</p>
        </div>
    );
}

export default Hablemos;