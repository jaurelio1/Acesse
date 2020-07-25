import React from 'react';
import Body from '../body';
import Head from '../Header';
import './style.css';

const Main = () =>(
    <div className='main'>
        <div className='head'>
            <Head />
        </div>
        <div>
            <Body />
        </div>                
    </div>
);

export default Main;