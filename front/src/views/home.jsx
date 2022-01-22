import React from 'react';
import Inicio from './landsection/inicio';
import QueHacemos from './landsection/quehacemos';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';
import Precios from './landsection/precios';
import Hablemos from './landsection/hablemos';

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
                <h1>prueba mobile</h1>
            </div>
        </div>
    );
}

export default Home;