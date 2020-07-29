import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SinalMat from './img/sinal_mat.png';
import SinalEng from './img/sinal_engenheiro.png';

import './style.css';

export default class Body extends Component{
    state = {        
        nomes_disciplinas: ['Matematica', 'Engenharia'],
        sinais: [SinalMat, SinalEng],  
    };    
    
    render(){
        const {nomes_disciplinas, sinais} = this.state;
        return(
            <div className='disciplinas'>
                {nomes_disciplinas.map(function(disciplina, indice){
                    return (
                    <article key={indice}>
                        <div className="block-link">
                        <Link to={`/${disciplina}`}>
                            <img src={sinais[indice]}/>
                            <p>
                                {disciplina}
                            </p>
                        </Link>
                        </div>                        
                    </article>
                    );                    
                })}                
            </div>            
        );
    }
}