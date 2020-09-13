import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


const Info = () =>(
    <div className="info">
        <div className="equipe">
            <Link to="/equipe">Equipe</Link>
        </div>
        <div className="projeto">
            <Link to="/projeto">Projeto</Link>
        </div>        
    </div>
);

export default Info;