import React from 'react';
import CuadroUno from '../../img/cuadrouno.svg';
import CuadroDos from '../../img/cuadrodos.svg';
import CuadroTres from '../../img/cuadrotres.svg';
import CuadroCuatro from '../../img/cuadrocuatro.svg';
import Rocket from '../../img/rocket.svg';

const PorQue = props => {
    return(
        <div className="porque-cont text-center my-5 no-gutters">
            <h1 className="mb-3">¿POR QUÉ TRABAJAR JUNTOS?</h1>
            <p>NUESTRO TRABAJO ES GARATÍA DE COMPROMISO, DEDICACIÓN Y EXPERIENCIA</p>
            <img src={Rocket} alt="rocket" className="rocket" />
            <div className="cuadros d-flex justify-content-center py-5 no-gutters">
                <img src={CuadroUno} alt="cuadrouno" className="cuadro" />
                <img src={CuadroDos} alt="cuadrodos" className="cuadro" />
                <img src={CuadroTres} alt="cuadrotres" className="cuadro" />
                <img src={CuadroCuatro} alt="cuadrocuatro" className="cuadro" />
            </div>
        </div>
    );
}

export default PorQue;