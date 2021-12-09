import React from 'react';
import Inicio from './landsection/inicio';
import QueHacemos from './landsection/quehacemos';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';
import Precios from './landsection/precios';
// import Hablemos from './landsection/hablemos';

const Home = props => {
    return(
        <div className="home no-gutters">
            <Inicio />
            <QueHacemos />
            <Trabajamos />
            <PorQue />
            <Precios />
            {/* <Hablemos /> */}
        </div>
    );
}

export default Home;