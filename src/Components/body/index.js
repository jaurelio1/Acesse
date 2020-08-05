import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import SinalMat from './img/sinal_mat.png';
import SinalEng from './img/sinal_engenheiro.png';

import './style.css';

const Body = () => {
    let state = {        
        nomes_disciplinas: ['Matematica', 'Engenharia'],
        sinais: [SinalMat, SinalEng], 
    };
    
    const [dropdownOpen, setDropdownOpen ] = useState(false);
    
    const {nomes_disciplinas, sinais} = state;

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
        <div className="body">
            <div>
               <Dropdown className="dropdown">
                   <Dropdown.Toggle variant="sucess" id="dropdown-basic">
                       Informações
                   </Dropdown.Toggle>
                   <Dropdown.Menu>
                       <Dropdown.Item><Link to="/equipe">Equipe</Link></Dropdown.Item>
                       <Dropdown.Item href="#"><Link to="/projeto">Projeto</Link></Dropdown.Item>
                   </Dropdown.Menu>
               </Dropdown>
            </div>
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