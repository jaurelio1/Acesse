import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';

import ModalVideo from 'react-modal-video';

import DefCubo from './img/Def_Cubo.png';
import DefExtSeg from './img/Def_ExtSeg.png';
import DefSemi from './img/Def_semirreta.png';
import DefRetCop from './img/Def_RetCop.png';
import DefSegcol from './img/Def_SegCol.png';
import DefSegcons from './img/Def_SegCons.png';

import Semirreta from './img/Semirreta.png';

//Obs: Os videos so estao carregando quando estou logado na minha conta do Youtube
//provavelmente tenho que deixar os vídeos públicos. Resolvo isso depois
export default class Matematica extends Component{
    constructor(){
        super();
        this.state = {
            definicao: '',
            imagem: '', 
            videoId: '',
            isOpen: false,
            definicoes: [DefCubo, DefExtSeg, DefSemi, DefRetCop, DefSegcol, DefSegcons],
            palavras:['Cubo', 'Extremos do Segmento', 'Semirreta', 'Retas coplanares', 'Segmentos colineares', 'Segmentos consecutivos'],
            videosLinks: [ 'VvgeQnOnuzA', 'Pr-YhkAZjFQ', 'JFddwusHU2E', 'ENqo-qJ4Vq4', 'yt8WEClckX8', '5PNinV1UQ2Y'],
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
                    <div className="sinal-palavra">
                        <ol className="scrollbox">
                            <h6><u>Palavras</u></h6>                            
                            {this.state.videosLinks.map((link, indice) =>                               
                                (
                                    <article key={indice}>
                                        <li>
                                            <a href="#"
                                            onClick={() => this.setState({isOpen:true,
                                                definicao: this.state.definicoes[indice],
                                                videoId:link})}>
                                                {this.state.palavras[indice]}</a> 
                                        </li>                                                                      
                                    </article>
                                )
                            )}                                                                     
                        </ol>
                        <div className="sinal_mao">
                            <button><Link to='sinal_de_mao'>Sinal de Mão</Link></button>                                                
                        </div>                                                 
                    </div>
                    <div className="adicionais">
                        <div>                        
                            <div id="input-definicao">
                                <span>Definição - Português</span>
                                <img src={this.state.definicao} />                           
                            </div>
                            <div id="image-definicao">
                                <span>Imagem</span>
                                <img src={this.state.imagem}/>
                            </div>
                            <div id="mao-definicao">
                                <span>Mão</span>
                            </div>
                        </div>
                        <div>
                            <div id="input-def-lib">
                                <span>Definição - Libras</span>
                            </div>
                            <div className='modals'>
                                <span>Video</span>
                                <iframe id="ytplayer" type="text/html" width="426" height="240"
                                src={`https://www.youtube.com/embed/${this.state.videoId}?autoplay=1&origin=http://example.com`} 
                                frameBorder="0"></iframe>
                            </div>
                        </div>
                    </div>                                                            
                </div>
                <Link to="/">Voltar</Link>                             
            </div>            
        );
    }    
}