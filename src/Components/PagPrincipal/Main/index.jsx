import React from 'react';
import Body from '../Body/index';
import Head from '../Header';
import Info from '../Header/informacoes';
import './style.css';

const Main = () =>(
    <div className='main'>
        <section>
            <Info/>
            <Head/>
        </section>        
        <section className="body">
            <Body/>
        </section>
                       
    </div>
);

export default Main;