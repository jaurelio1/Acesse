import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class MatSinal extends Component{    
    constructor(){
        super();
        this.state = {            
            letra: "-",
        }
    }
    
    render(){
        return(
            <div>
                <h1>{}</h1>               
                <Link to="/sinal_de_mao">Voltar</Link>
            </div>
        );
    }
}