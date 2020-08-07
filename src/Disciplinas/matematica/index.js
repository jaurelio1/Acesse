import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';

import ModalVideo from 'react-modal-video';

import Semirreta from './img/Semirreta.jpg';

//Obs: Os videos so estao carregando quando estou logado na minha conta do Youtube
//provavelmente tenho que deixar os vídeos públicos. Resolvo isso depois
export default class Matematica extends Component{
    constructor(){
        super();
        this.state = {
            mensagem: '',
            imagem: '',
            isOpen: false,
            isOpenEx: false,
            isOpenPonto: false,
            isOpenRetCop: false,
            isOpenSemi: false,
            isOpenSegCol: false,
            isOpenSegCon: false,
        }
        this.openModal = this.openModal.bind(this);
    }
    
    openModal(){
        this.setState({isOpen: true});
    }   

    render(){
        return(
            <div className="videos">                
                <div className="lista_videos">
                    <div className='modals'>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpenEx} videoId='Pr-YhkAZjFQ' onClose={() =>this.setState({isOpenEx: false})}/>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpenSemi} videoId='JFddwusHU2E' onClose={() =>this.setState({isOpenSemi: false})}/>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpenRetCop} videoId='ENqo-qJ4Vq4' onClose={() =>this.setState({isOpenRetCop: false})}/>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpenSegCol} videoId='yt8WEClckX8' onClose={() =>this.setState({isOpenSegCol: false})}/>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpenSegCon} videoId='5PNinV1UQ2Y' onClose={() =>this.setState({isOpenSegCon: false})}/>
                    </div>
                    <div className="links">
                        <a href="#" 
                        onClick={() => this.setState({isOpenEx: true, mensagem:"Ola Mundo"})}>
                            Extremos do segmento</a>                    
                        <a href="#" 
                        onClick={() => this.setState({isOpenSemi: true, 
                        mensagem:"Parte de uma reta limitada por um ponto",
                        imagem:Semirreta})}>
                            Semirreta</a>                                     
                        <a href="#" 
                        onClick={() => this.setState({isOpenRetCop: true})}>
                            Retas coplanares</a>                                     
                        <a href="#" 
                        onClick={() => this.setState({isOpenSegCol: true})}>
                            Segmentos colineares</a>                                     
                        <a href="#" 
                        onClick={() => this.setState({isOpenSegCon: true})}>
                            Segmentos consecutivos</a>
                    </div>
                    <div className="adicionais">                        
                        <div id="input-definicao">
                            <h6>Definição</h6>
                           {this.state.mensagem}                            
                        </div>
                        <div id="image-definicao">
                            <h6>Imagem</h6>
                            <img src={this.state.imagem}/>
                        </div>
                    </div>
                    <div className="manual">
                        <h6>Como funciona?</h6>
                        <p>Clique na palavra que deseja.<br/>
                        Logo após, irá aparecer um video demonstrando <br/>
                        o sinal e atrás do video <br/>
                        estará definições formais sobre a palavra.
                        </p>
                    </div>                                        
                </div>
                <Link to="/">Voltar</Link>                             
            </div>            
        );
    }
    
}

