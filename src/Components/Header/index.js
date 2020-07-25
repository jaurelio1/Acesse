import React from 'react';
import { render } from '@testing-library/react';
import if_logo from './IF_logo.png';
import './style.css';


const Header = () =>(
    <div className='Header'>
        <img src={if_logo}/>
        <p>Acesse: Plataforma colaborativa para produção e 
           divulgação de glossários Libras-Português
           em formato de vídeo. 
        </p>
    </div>
);

export default Header;