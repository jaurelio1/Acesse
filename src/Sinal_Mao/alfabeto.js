import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import A from './img/letraA.png';
import B from './img/letraB.png';
import C from './img/letraC.png';
import D from './img/letraD.png';
import E from './img/letraE.png';
import F from './img/letraF.png';
import G from './img/letraG.png';
import H from './img/letraH.png';
import I from './img/letraI.png';
import J from './img/letraJ.png';
import K from './img/letraK.png';
import L from './img/letraL.png';
import M from './img/letraM.png';
import N from './img/letraN.png';
import O from './img/letraO.png';
import P from './img/letraP.png';
import Q from './img/letraQ.png';
import R from './img/letraR.png';
import S from './img/letraS.png';
import T from './img/letraT.png';
import U from './img/letraU.png';
import V from './img/letraV.png';
import W from './img/letraW.png';
import X from './img/letraX.png';
import Y from './img/letraY.png';
import Z from './img/letraZ.png';

let linha1 = [[A, "A"], [F, "F"], [K, "K"], [P, "P"], [U, "U"], [Z, "Z"]];
let linha2 = [[B, "B"], [G, "G"], [L, "L"], [Q, "Q"], [V, "V"]];
let linha3 = [[C, "C"], [H, "H"], [M, "M"], [R, "R"], [W, "W"]];
let linha4 = [[D, "D"], [I, "I"], [N, "N"], [S, "S"], [X, "X"]];
let linha5 = [[E, "E"], [J, "J"], [O, "O"], [T, "T"], [Y, "Y"]];

const Alfa = () =>{
    const setLetra = (letra) =>{
        sessionStorage.setItem("letra", letra);
    }
    return(
    <div className="block">
            <Link to="/" id="home">Home</Link>
            <div class="container-body">                            
                <div class="linha1">
                    {linha1.map((letra1, indice1)=>(
                        <Link to="palavras-filtradas" onClick={()=> setLetra(letra1[1])}>
                            <img src={letra1[0]} style={{width:40}, {height:60}}/>
                        </Link>                                                 
                    ))}                  
                </div>
                <div class="linha2">
                    {linha2.map((letra2, indice2)=>(
                        <Link to="palavras-filtradas" onClick={()=> setLetra(letra2[1])}>
                            <img src={letra2[0]} style={{width:40}, {height:60}}/>
                        </Link>                                                 
                    ))}                  
                </div>
                <div class="linha3">
                    {linha3.map((letra3, indice3)=>(
                        <Link to="palavras-filtradas" onClick={()=> setLetra(letra3[1])}>
                            <img src={letra3[0]} style={{width:40}, {height:60}}/>
                        </Link>                                                 
                    ))}                  
                </div>
                <div class="linha4">
                    {linha4.map((letra4, indice4)=>(
                        <Link to="palavras-filtradas" onClick={()=> setLetra(letra4[1])}>
                            <img src={letra4[0]} style={{width:40}, {height:60}}/>
                        </Link>                                                
                    ))}                  
                </div>
                <div class="linha5">
                    {linha5.map((letra5, indice5)=>(
                        <Link to="palavras-filtradas" onClick={()=> setLetra(letra5[1])}>
                            <img src={letra5[0]} style={{width:40}, {height:60}}/>
                        </Link>                                                 
                    ))}                  
                </div>                                   
            </div>
            <Link to="/matematica" id="voltar">Voltar</Link>                
        </div>
    );
}

export default Alfa;