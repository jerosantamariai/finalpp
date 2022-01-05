import React from 'react';
import CuadroUno from '../../img/SQ1.svg';
import CuadroDos from '../../img/SQ2.svg';
import CuadroTres from '../../img/SQ3.svg';
import CuadroCuatro from '../../img/SQ4.svg';
import CuadroCinco from '../../img/SQ5.svg';
import CuadroSeis from '../../img/SQ6.svg';
import CuadroSiete from '../../img/SQ7.svg';
import CuadroOcho from '../../img/SQ8.svg';
import DoubleLine from '../../img/doubleline.svg';
import Cup from '../../img/cup.svg';

const PorQue = props => {
    return (
        <div className="porque-cont text-center no-gutters" id="porque">
            <h1 className="primtit">¿PORQUÉ<br></br>TRABAJAR JUNTOS?</h1>
            {/* <p className="subprimtit">NUESTRO TRABAJO ES GARATÍA DE COMPROMISO, DEDICACIÓN Y EXPERIENCIA</p> */}
            <div className="cuadros">
                <div className="d-flex justify-content-center no-gutters">
                    <img src={CuadroUno} alt="cuadrouno" className="cuadro" />
                    <img src={CuadroDos} alt="cuadrodos" className="cuadro" />
                    <img src={CuadroTres} alt="cuadrotres" className="cuadro" />
                    <img src={CuadroCuatro} alt="cuadrocuatro" className="cuadro" />
                </div>
                <div className="cuadros d-flex justify-content-center no-gutters">
                    <img src={CuadroCinco} alt="cuadrocinco" className="cuadro" />
                    <img src={CuadroSeis} alt="cuadroseis" className="cuadro" />
                    <img src={CuadroSiete} alt="cuadrosiete" className="cuadro" />
                    <img src={CuadroOcho} alt="cuadroocho" className="cuadro" />
                </div>
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
            </div>
            <div className="nuespro">
                <h1 className="primtit">NUESTRO PROPÓSITO</h1>
                <p className="subprimtitblack">DEMOCRATIZAMOS EL ACCESO A SERVICIOS<br></br>DE COBRANZA PARA PYMES</p>
                <p className="subprimtit">RECUPERAMOS TUS DEUDAS, RESGUARDANDO TU FLUJO DE CAJA!</p>
            </div>
                <img src={Cup} alt="cup" className="cup" />
        </div>
    );
}

export default PorQue;