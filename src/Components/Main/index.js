import React from 'react';
import Body from '../body/index';
import Head from '../Header';
import Info from '../body/informacoes';
import './style.css';

const Main = () =>(
    <div className='main'>
        <Info/>
        <Head/>
        <Body/>               
    </div>
);

export default Main;