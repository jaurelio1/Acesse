import React from 'react';
import {Link} from 'react-router-dom';

import SinalMat from './img/sinal_mat.png';
import SinalFis from './img/sinal_fisica.jpg';

import './style.css';

const Body = () => {
    let state = {        
        nomes_disciplinas: ['Matematica', 'Fisica'],
        sinais: [SinalMat, SinalFis], 
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