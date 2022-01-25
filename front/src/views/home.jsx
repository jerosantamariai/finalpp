import React from 'react';
// version desktop
import Inicio from './landsection/inicio';
import QueHacemos from './landsection/quehacemos';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';
import Precios from './landsection/precios';
import Hablemos from './landsection/hablemos';
// version mobile
import InicioM from './landmobile/iniciom';
import QueHacemosM from './landmobile/quehacemosm';
import TrabajamosM from './landmobile/trabajamosm';
import PorQueM from './landmobile/porquem';
import PreciosM from './landmobile/preciom';
import HablemosM from './landmobile/hablemosm';
import WpLogo from '../img/wplogo.png';

const Home = props => {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=56931816173" target="_blank"><img src={WpLogo} alt="wplogo" className='wplogo' /></a>
            {/* version desktop */}
            <div className="home no-gutters d-none d-md-block">
                <Inicio />
                <QueHacemos />
                <Trabajamos />
                <PorQue />
                <Precios />
                <Hablemos />
            </div>
            {/* version mobile */}
            <div className='d-block d-md-none'>
                <InicioM />
                <QueHacemosM />
                <TrabajamosM />
                <PorQueM />
                <PreciosM />
                <HablemosM />
            </div>
        </div>
    );
}

export default Home;