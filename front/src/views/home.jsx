import React from 'react';
import Inicio from './landsection/inicio';
import Trabajamos from './landsection/trabajamos';
import PorQue from './landsection/porque';

const Home = props => {
    return(
        <div className="home">
            <Inicio />
            <Trabajamos />
            <PorQue />
        </div>
    );
}

export default Home;