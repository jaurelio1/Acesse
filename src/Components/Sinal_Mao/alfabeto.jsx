import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GetImagem from './imagens';

class Alfabeto extends Component{
    constructor(props){
        super(props);
        this.state = {
            linha1: ["A", "F", "K", "P", "U", "Z"],
            linha2: ["B", "G", "L", "Q", "V"],
            linha3: ["C", "H", "M", "R", "W"],
            linha4: ["D", "I", "N", "S", "X"],
            linha5: ["E", "J", "O", "T", "Y"],
            ehFiltrado: false,
        }
    }

    verificarEhFiltrado(ehFiltrado){
        sessionStorage.setItem('ehFiltrado', ehFiltrado);        
    }

    render(){
        return(
            <div className="block">
                <Link to="/" id="home">Home</Link>
                <div className="container-body">                            
                    <div className="linha1">
                        {this.state.linha1.map((letra1, indice1)=>(
                            <article key={indice1}>
                                <Link to="matematica" onClick={sessionStorage.setItem("letra", letra1)}>
                                    <GetImagem informaLetra={letra1} ehFiltrado={this.state.ehFiltrado} verificarEhFiltrado={this.verificarEhFiltrado.bind(this)}/>
                                </Link>
                            </article>                                                                             
                        ))}                  
                    </div>
                    <div className="linha2">
                        {this.state.linha2.map((letra2, indice2)=>(
                            <article key={indice2}>
                                <Link to="matematica" onClick={sessionStorage.setItem("letra", letra2)}>
                                    <GetImagem informaLetra={letra2} ehFiltrado={this.state.ehFiltrado} verificarEhFiltrado={this.verificarEhFiltrado.bind(this)}/>
                                </Link>
                            </article>                                                                             
                        ))}                  
                    </div>
                    <div className="linha3">
                        {this.state.linha3.map((letra3, indice3)=>(
                            <article key={indice3}>
                                <Link to="matematica" onClick={sessionStorage.setItem("letra", letra3)}>
                                    <GetImagem informaLetra={letra3} ehFiltrado={this.state.ehFiltrado} verificarEhFiltrado={this.verificarEhFiltrado.bind(this)}/>
                                </Link>
                            </article>                                                                             
                        ))}                  
                    </div>
                    <div className="linha4">
                        {this.state.linha4.map((letra4, indice4)=>(
                            <article key={indice4}>
                                <Link to="matematica" onClick={sessionStorage.setItem("letra", letra4)}>
                                    <GetImagem informaLetra={letra4} ehFiltrado={this.state.ehFiltrado} verificarEhFiltrado={this.verificarEhFiltrado.bind(this)}/>
                                </Link>
                            </article>                                                                             
                        ))}                  
                    </div>
                    <div className="linha5">
                        {this.state.linha5.map((letra5, indice5)=>(
                            <article key={indice5}>
                                <Link to="matematica" onClick={sessionStorage.setItem("letra", letra5)}>
                                    <GetImagem informaLetra={letra5} ehFiltrado={this.state.ehFiltrado} verificarEhFiltrado={this.verificarEhFiltrado.bind(this)}/>
                                </Link>
                            </article>                                                                             
                        ))}                  
                    </div>                                 
                </div>
                <Link to="/matematica" id="voltar">Voltar</Link>                
            </div>
        );
    }
    
}

export default Alfabeto;