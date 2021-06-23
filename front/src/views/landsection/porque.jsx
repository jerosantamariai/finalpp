import React from 'react';
import CuadroUno from '../../img/cuadrouno.svg';
import CuadroDos from '../../img/cuadrodos.svg';
import CuadroTres from '../../img/cuadrotres.svg';
import CuadroCuatro from '../../img/cuadrocuatro.svg';

const PorQue = props => {
    return(
        <div className="porque-cont text-center my-5">
            <h1>¿POR QUÉ TRABAJAR JUNTOS?</h1>
            <p>NUESTRO TRABAJO ES GARATÍA DE COMPROMISO, DEDICACIÓN Y EXPERIENCIA</p>
            <div className="cuadros d-flex justify-content-center py-5">
                <img src={CuadroUno} alt="cuadrouno" className="cuadro" />
                <img src={CuadroDos} alt="cuadrodos" className="cuadro" />
                <img src={CuadroTres} alt="cuadrotres" className="cuadro" />
                <img src={CuadroCuatro} alt="cuadrocuatro" className="cuadro" />
            </div>
        </div>
    );
}

export default PorQue;