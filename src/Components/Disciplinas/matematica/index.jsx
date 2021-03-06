import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';
import ImagensDef from './imagensDef';
import VideoLinks from './videoLinks';
import ScrollBox from './scrollbox';
import GetImagem from '../../Sinal_Mao/imagens';

export default class Matematica extends Component{
    constructor(props){
        super(props);
        this.state = {
            definicao: '',
            letra: sessionStorage.getItem('letra'), 
            imagem: '',
            isOpen: false,
            palavras:['Aresta', 'Cilindro Oblíquo', 'Cilindro Reto', 'Cone', 'Corpos Redondos', 
            'Cubo', 'Dodecaedro Regular', 'Extremos do Segmento', 'Face', 'Hexaedro Regular', 'Icosaedro Regular',
            'Lado do Polígono', 'Octaedro Regular', 'Paralelepípedo', 'Pirâmide', 'Pirâmide Triangular', 'Pirâmide Quadrangular',
            'Pirâmide Pentagonal', 'Pirâmide Hexagonal', 'Planificação', 'Poliedro' , 'Poliedro Convexo', 'Poliedro Não Convexo',
            'Poliedro Regular', 'Prisma', 'Prisma Oblíquo', 'Ponto',
            'Prisma Reto', 'Prisma Triangular', 'Prisma Quadrangular', 'Prisma Pentagonal', 'Prisma Hexagonal', 'Polígono Convexo',
            'Polígono Não Convexo', 'Polígono Regular', 'Retas Coincidentes', 'Retas Concorrentes', 'Retas Reversas', 'Retas Coplanares',
            'Semirreta', 'Segmentos Consecutivos', 'Segmentos Colineares', 'Sólido Geométrico', 'Tetraedro Regular', 'Vértice'],            
        }
        this.openModal = this.openModal.bind(this);
        this.palavrasFiltradas = [];
    }

    //cria a lista da palavras filtradas
    filtroDePalavras = (query) =>{
        return this.state.palavras.filter(el => el[0].toLowerCase() === query.toLowerCase());
    }
    
    /*como a lista palavras vai ser maior que a lista de palavras filtradas,
    essa função serve para achar os indíces das palavras filtradas e os armazena em uma lista
    */
    indicePalavrasFiltradas = () =>{
        let indice = []
        for(let i = 0; i < this.filtroDePalavras(this.letra).length; i++){
            for(let j = 0; j < this.state.palavras.length; j++){
                if(this.filtroDePalavras(this.state.letra)[i] === this.state.palavras[j]){
                    indice.push(j);
                }                
            }
        }
        return indice;
    }

    verificarEhFiltrado(){
        if(sessionStorage.getItem('ehFiltrado') === 'true'){            
            this.palavrasFiltradas = this.filtroDePalavras(sessionStorage.getItem('letra'));
            return this.palavrasFiltradas;
        }
        else{
            return this.state.palavras;
        }        
    }

    retornaPalavraScrollBox(palavra){
        this.setState({definicao: palavra});
        console.log(this.state.definicao);
    }    
    
    openModal(){
        this.setState({isOpen: true});
    }   

    render(){
        return(
            <div className="videos">
                <Link to="/">Home</Link>                
                <div className="lista_videos">  
                    <div className="sinal-palavra">
                        <ScrollBox ehPalavraFiltrada={this.verificarEhFiltrado()} retornaPalavra={this.retornaPalavraScrollBox.bind(this)}/>
                        <div className="sinal_mao">
                            <button><Link to='sinal_de_mao'>Sinal de Mão</Link></button>                                                
                        </div>                                                 
                    </div>
                    <section className="adicionais">
                        <section>
                            <ImagensDef imagem={this.state.definicao}/>
                            <div id="image-definicao">
                                <span>Imagem</span>
                                <img src={this.state.imagem}/>
                            </div>
                            <div id="mao-definicao">
                                <span>Mão</span>
                                <GetImagem informaLetra={this.state.definicao[0]}/>
                            </div>
                        </section>
                        <section>
                            <div id="input-def-lib">
                                <span>Definição - Libras</span>
                            </div>
                            <VideoLinks indice={this.state.palavras.indexOf(this.state.definicao)}/>
                        </section>
                    </section>                                                            
                </div>                             
            </div>            
        );
    }    
}