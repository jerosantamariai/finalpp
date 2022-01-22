import React from 'react';
import Inicio from './landsection/inicio';
import QueHacemos from './landsection/quehacemos';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';
import Precios from './landsection/precios';
import Hablemos from './landsection/hablemos';
import InicioM from './landmobile/iniciom';

const Home = props => {
    return (
        <div>
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
            </div>
        </div>
    );
}

export default Home;