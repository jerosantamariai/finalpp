import React from "react";

const Form = props => {
    return (
        <form method='post' action='sendmail.php' >
            <div className="mb-3">
                <label className="form-label">EMAIL</label>
                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name='email' required />
            </div>
            <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input type="text" className="form-control" id="exampleInputName" name='name' required />
            </div>
            <div className="mb-3">
                <label className="form-label">COMENTARIO</label>
                <textarea type="text" className="form-control" id="exampleInputComentario" name='comments' required />
            </div>
            {/* <img src={Submit} alt="submit" type="submit" className="submit mt-4" /> */}
            <button type='submit' className='submit mt-4'>Enviar</button>
        </form>
    );
}

export default Form;