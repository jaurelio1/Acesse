import React from 'react';
import Body from '../body/index';
import Head from '../Header';
import Info from '../body/informacoes';
import './style.css';

const Main = () =>(
    <div className='main'>
        <div className='head'>
            <div>
                <Head />
            </div>
            <div>
                <Info />
            </div>
        </div>
        <div className="body">
            <Body />
        </div>                
    </div>
);

export default Main;