import React from 'react';
import Submit from '../../img/submit.svg';
import DoubleLine from '../../img/doubleline.svg';
import Dialogo from '../../img/hablemos.svg';

const HablemosM = props => {
    return (
        <div className="hablemosM text-center" id="hablemos">
            <h1 className="primtit">HABLEMOS!</h1>
            <p className="subprimtit">QUEREMOS AYUDARTE</p>
            <img src={Dialogo} alt="dialogo" className="dialogo" />
            <div className="formulario col-10 offset-1">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">NOMBRE</label>
                        <input type="text" className="form-control" id="exampleInputName" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputComment" className="form-label">COMENTARIO</label>
                        <textarea type="text" className="form-control" id="exampleInputComentario" rows="4" />
                    </div>
                    <img src={Submit} alt="submit" type="submit" className="submit mt-4" />
                </form>
            </div>
            <img src={DoubleLine} alt="doubleline" className="doubleline my-5 py-4" />
            {/* <h1>O CONTÁCTANOS</h1>
            <p className="endspace">ABOGADOS@PROTEGEPYME.COM</p> */}
        </div>
    );
}

export default HablemosM;