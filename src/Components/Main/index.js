import React from 'react';
import Body from '../body/index';
import Head from '../Header';
import Info from '../body/informacoes';
import './style.css';

const Main = () =>(
    <div className='main'>
        <div className='head'>
            <Head />
        </div>
        <div className='info'>
            <Info />
        </div>
        <div>
            <Body />
        </div>                
    </div>
);

export default Main;