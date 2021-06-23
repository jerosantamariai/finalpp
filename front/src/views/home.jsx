import React from 'react';
import Inicio from './landsection/inicio';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';
import Precios from './landsection/precios';

const Home = props => {
    return(
        <div className="home no-gutters">
            <Inicio />
            <Trabajamos />
            <PorQue />
            <Precios />
        </div>
    );
}

export default Home;