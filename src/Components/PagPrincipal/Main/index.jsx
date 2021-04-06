import React, {Component} from 'react';
import Body from '../Body/index';
import Head from '../Header';
import Info from '../Header/informacoes';
import './style.css';

export default class Main extends Component{
    constructor(props){
        super(props);
        sessionStorage.setItem('ehFiltrado', false);
        sessionStorage.setItem('letra', '');
    }

    render(){
        return(
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
    }
}