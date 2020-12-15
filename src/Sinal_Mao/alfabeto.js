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
                        <button className="botao-filtro" onClick={()=> setLetra(letra1)}>
                            <Link to="palavras-filtradas">{letra1}</Link>
                        </button>                         
                    ))}                  
                </div>
                <div class="linha2">
                    {linha2.map((letra2, indice2)=>(
                        <button className="botao-filtro" onClick={()=> setLetra(letra2)}>
                            <Link to="palavras-filtradas">{letra2}</Link>
                        </button>                         
                    ))}                  
                </div>
                <div class="linha3">
                    {linha3.map((letra3, indice3)=>(
                        <button className="botao-filtro" onClick={()=> setLetra(letra3)}>
                            <Link to="palavras-filtradas">{letra3}</Link>
                        </button>                         
                    ))}                  
                </div>
                <div class="linha4">
                    {linha4.map((letra4, indice4)=>(
                        <button className="botao-filtro" onClick={()=> setLetra(letra4)}>
                            <Link to="palavras-filtradas">{letra4}</Link>
                        </button>                         
                    ))}                  
                </div>
                <div class="linha5">
                    {linha5.map((letra5, indice5)=>(
                        <button className="botao-filtro" onClick={()=> setLetra(letra5)}>
                            <Link to="palavras-filtradas">{letra5}</Link>
                        </button>                         
                    ))}                  
                </div>                                   
            </div>
            <Link to="/matematica">Voltar</Link>                
        </div>
    );
}

export default Alfa;