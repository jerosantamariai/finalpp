import React from 'react';
import Table from '../../img/table.png';
import NuestrosPrecios from '../../img/nuestrosprecios.png';
import SignoPeso from '../../img/signopeso.svg';
// import Torta from '../../img/torta.svg';
// import Cotiza from '../../img/cotiza.svg';
import DoubleLine from '../../img/doubleline.svg';
import LightBulb from '../../img/lightbulb.png';
// import Lupa from '../../img/lupa.png';

const Precios = props => {
    return (
        <div className="precios-cont no-gutters">
            <div className="preciostitulo">
                <h1 className="primtit">TRANSPARENCIA</h1>
                <p className="subprimtit">LO QUE NOS CARACTERIZA</p>
                <img src={SignoPeso} alt="signopeso" className="signopeso" />
            </div>
            <div>
                {/* <img src={Lupa} alt="lupa" className="lupa" />
                <span className='primtit1'>UESTROS PRECIOS</span> */}
                <img src={NuestrosPrecios} alt="nuestrosprecios" className="nuestrosprecios" />
            </div>
            <br />
            {/* <img src={Tabla} alt="tabla" className="tabla" /> */}
            <div className='tablecont text-center'>
                <img src={Table} alt="table" className="table" />
                {/* <table>
                    <tr>
                        <th>MONTO DEUDA</th>
                        <th>COMISIÓN DE RECUPERO</th>
                        <th>ANTICIPO<small><br></br>(Se descuenta de la comisión)</small></th>
                    </tr>
                    <tr>
                        <td>1-3MM</td>
                        <td>15%</td>
                        <td>Desde 3 UF *</td>
                    </tr>
                    <tr>
                        <td>3-5MM</td>
                        <td>14%</td>
                        <td>Hasta 9 UF *</td>
                    </tr>
                    <tr>
                        <td>5-10MM</td>
                        <td>13%</td>
                        <td>Hasta 12,5 UF</td>
                    </tr>
                    <tr>
                        <td>10-20MM</td>
                        <td>12%</td>
                        <td>Hasta 14,5 UF</td>
                    </tr>
                    <tr>
                        <td>Sobre 20MM</td>
                        <td>10%</td>
                        <td>Hasta 15 UF</td>
                    </tr>
                </table> */}
                <div className="condiciones text-right">
                    {/* <p className="condtext mb-2">* Los juicios NO comprenden gastos judiciales. RECEPTORES y otros aplicables.</p>
                    <p className="condtext mb-0 mt-n2">* El anticipo comprende solo primera instancia</p> */}
                    <p className="condtext mb-2">* En estos tramos, se ofrecen 2 alternativas:         <br></br>a) Tramitación completa del juicio.<br></br>b) Tramitación parcial para reducir los gastos.</p>
                    <p className="condtext mb-2">* Se calcula la UF referencial del día de contratación</p>
                    <p className="condtext mb-2">* Los servicios no comprenden gastos procesales de tramitación (receptores y otros aplicables)</p>
                    <p className="condtext mb-2">* *El valor del anticipo solo comprende  primera instancia.</p>
                </div>
            </div>
            <div className="juiord">
                <img src={LightBulb} alt="lightbulb" className="lightbulb" />
                <h1 className="primtit">JUICIOS ORDINARIOS DE<br></br>COBRO EN UF</h1>
                <p className="primit2">DESDE $ 399.000 + % DE RECUPERO</p>
                <br />
                {/* <img src={Cotiza} alt="cotiza" className="cotiza" /> */}
                <a className='btn btncolor' href="#hablemos" >COTIZA AQUÍ</a>
            </div>
            {/* <img src={Torta} alt="torta" className="torta" /> */}
            <br />
            <img src={DoubleLine} alt="doubleline" className="doubleline" />
        </div>
    );
}

export default Precios;