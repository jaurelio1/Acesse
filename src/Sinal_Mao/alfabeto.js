import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

let linha1 = ["A","F","K","P","U", "Z"];
let linha2 = ["B","G","L","Q","V", "Ç"];
let linha3 = ["C","H","M","R","W"];
let linha4 = ["D","I","N","S","X"];
let linha5 = ["E","J","O","T","Y"];

const Alfa = () =>{
    const setLetra = (letra) =>{
        sessionStorage.setItem("letra", letra);
    }
    return(
    <div className="block">
            <div class="container-body">                            
                <div class="linha1">
                    {linha1.map((letra1, indice1)=>(
                        <button onClick={()=> setLetra(letra1)}>
                            <Link to="palavras-filtradas">{letra1}</Link>
                        </button>                         
                    ))}                  
                </div>
                <div class="linha4">
                    {linha4.map((letra4, indice1)=>(
                        <button onClick={()=> setLetra(letra4)}>
                            <Link to="palavras-filtradas">{letra4}</Link>
                        </button>                         
                    ))}                  
                </div>                                   
            </div>
            <Link to="/matematica">Voltar</Link>                
        </div>
    );
}

export default Alfa;