import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Equipe = () =>(
    <div className='text'>
        <h5>Equipe:</h5>         
        <h6>Joab dos Santos Silva</h6>
        <p>"Docente(Mestre+RSC-III LEI 12772/12 ART 18)" <br/>
        "Coordenador do Projeto"
        </p>
        <h6>José Aurélio Epaminondas de Carvalho</h6>
        <p>"Graduando do curso de Engenharia da Computação" <br/>
        "Programador responsável"</p>
        <Link to="/" className="link">Voltar</Link>       
    </div>
);

export default Equipe;