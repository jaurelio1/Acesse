import React from 'react';
import {Link} from 'react-router-dom';

import Mat from './img/matematica.jpeg';
import SinalFis from './img/fisica.jpeg';

import './style.css';

const Body = () => {
    let state = {        
        nomes_disciplinas: ['Matematica', 'Fisica'],
        sinais: [Mat, SinalFis], 
    };    
    
    const {nomes_disciplinas, sinais} = state;
    
    return(
        <div className="body">            
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
        </div>                        
    );    
}

export default Body;