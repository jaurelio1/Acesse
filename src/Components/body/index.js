import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default class Body extends Component{
    state = {        
        nomes_disciplinas: ['matematica', '  engenharia'],  
    };    
    
    render(){
        const {nomes_disciplinas} = this.state;
        return(
            <div className='disciplinas'>
                {nomes_disciplinas.map(function(disciplina, indice){
                    return (
                    <article key={indice}>
                        <p>
                            <Link to={`/${disciplina}`}>{disciplina}</Link>
                        </p>
                    </article>
                    );                    
                })}                
            </div>            
        );
    }
}