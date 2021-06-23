import React from 'react';
import Submit from '../../img/submit.svg';
import BigDoubleLine from '../../img/bigdoubleline.svg';

const Hablemos = props => {
    return (
        <div className="hablemos-cont text-center my-5">
            <h1>HABLEMOS!</h1>
            <p>QUEREMOS AYUDARTE</p>
            <div className="formulario col-6 offset-3">
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
                    <img src={Submit} alt="submit" type="submit" className="submit my-4" />
                </form>
            </div>
            <img src={BigDoubleLine} alt="bigdoubleline" className="bigdoubleline my-5" />
            <h1>O CONTÁCTANOS</h1>
            <p>+56 9 3181 6173<br/>ABOGADOS@PROTEGEPYME.COM</p>
        </div>
    );
}

export default Hablemos;