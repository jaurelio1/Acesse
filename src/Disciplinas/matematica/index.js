import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';

import ModalVideo from 'react-modal-video';

import DefExtSeg from './img/Def_ExtSeg.png';
import DefSemi from './img/Def_semirreta.png';
import DefRetCop from './img/Def_RetCop.png';
import DefSegcol from './img/Def_SegCol.png';
import DefSegcons from './img/Def_SegCons.png';


import Semirreta from './img/Semirreta.jpg';

//Obs: Os videos so estao carregando quando estou logado na minha conta do Youtube
//provavelmente tenho que deixar os vídeos públicos. Resolvo isso depois
export default class Matematica extends Component{
    constructor(){
        super();
        this.state = {
            definicao: '',
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
                    <ol className="scrollbox">
                        <li>
                            <a href="#" 
                            onClick={() => this.setState({isOpenEx: true, 
                            definicao:DefExtSeg})}>
                                Extremos do segmento</a>
                        </li>
                        <li>
                            <a href="#" 
                            onClick={() => this.setState({isOpenSemi: true, 
                            definicao:DefSemi,
                            imagem:Semirreta})}>
                                Semirreta</a>
                        </li>
                        <li>
                            <a href="#" 
                            onClick={() => this.setState({isOpenRetCop: true,
                            definicao:DefRetCop})}>
                                Retas coplanares</a>
                        </li>
                        <li>
                            <a href="#" 
                            onClick={() => this.setState({isOpenSegCol: true,
                            definicao:DefSegcol})}>
                                Segmentos colineares</a>
                        </li>
                        <li>
                            <a href="#" 
                            onClick={() => this.setState({isOpenSegCon: true,
                            definicao:DefSegcons})}>
                                Segmentos consecutivos</a>
                        </li>                        
                    </ol>                   
                    <div className="adicionais">                        
                        <div id="input-definicao">
                            <span>Definição</span>
                            <img src={this.state.definicao} />                           
                        </div>
                        <div id="image-definicao">
                            <span>Imagem</span>
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

