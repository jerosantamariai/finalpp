import React from "react";
import Rocket from "../../img/rocket.svg";
import TableCross from "../../img/tablecross.svg";

const QueHacemosM = props => {
    return (
        <div className="queHacemosM text-center my-5">

            <img src={Rocket} alt="rocket" className="rocket" />
            <h1 className="primtit">OBTÉN EL RECUPERO DE TUS DEUDAS</h1>
            <h3 className="subprimtit">AYUDAMOS A LAS PYMES A RECUPERAR SUS<br></br>CRÉDITOS. ¡PRUEBA CON NOSOTROS!</h3>
            <h1 className="primtit">SERVICIOS LEGALES</h1>
            <h3 className="subprimtit">ASESORÍA LEGAL INTEGRAL PARA PYMES</h3>

            <div className="servlegtable">
                <div className="d-flex mb-3 px-3">
                    <img src={TableCross} alt="tablecross" className="tablecross" />
                    <h4 className="tableinfo">COBRANZA EJECUTIVA (FACTURAS, PAGARÉS Y OTROS TÍTULOS LEGALES)</h4>
                </div>
                <div className="d-flex mb-3 px-3">
                    <img src={TableCross} alt="tablecross" className="tablecross" />
                    <h4 className="tableinfo">COBRANZA ORDINARIA DE PESOS</h4>
                </div>
                <div className="d-flex mb-3 px-3">
                    <img src={TableCross} alt="tablecross" className="tablecross" />
                    <h4 className="tableinfo">PROCEDIMIENTOS DE REORGANIZACIÓN Y LIQUIDACIÓN</h4>
                </div>
                <div className="d-flex mb-3 px-3">
                    <img src={TableCross} alt="tablecross" className="tablecross" />
                    <h4 className="tableinfo">ASESORÍA LEGAL INTEGRAL PARA PYMES</h4>
                </div>
            </div>
        </div>
    );
}

export default QueHacemosM;