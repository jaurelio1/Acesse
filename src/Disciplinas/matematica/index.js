import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';

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
            palavras:['Aresta', 'Cilindro Oblíquo', 'Cilindro Reto', 'Cone', 'Corpos Redondos', 
            'Cubo', 'Dodecaedro Regular', 'Extremos do Segmento', 'Face', 'Hexaedro Regular', 'Icosaedro Regular',
            'Octaedro Regular', 'Lado do Polígono', 'Paralelepípedo', 'Pirâmide', 'Pirâmide Triangular', 'Pirâmide Quadrangular',
            'Pirâmide Pentagonal', 'Pirâmide Hexagonal', 'Planificação', 'Poliedro' , 'Poliedro Convexo', 'Poliedro Não Convexo',
            'Poliedro Regular', 'Prisma', 'Prisma Oblíquo', 'Ponto',
            'Prisma Reto', 'Prisma Triangular', 'Prisma Quadrangular', 'Prisma Pentagonal', 'Prisma Hexagonal', 'Polígono Convexo',
            'Polígono Não Convexo', 'Polígono Regular', 'Retas Coincidentes', 'Retas Concorrentes', 'Retas Reversas', 'Retas Coplanares',
            'Semirreta', 'Segmentos Consecutivos', 'Segmentos Colineares', 'Sólido Geométrico', 'Tetraedro Regular', 'Vértice'],
            videosLinks: ['kLivrgB7GY4', 'BR87VA8suLA', '434Yxk7a1cU', 'wGXYAkiOzHE', 'ErnpQhCW_Gg', 
            'VvgeQnOnuzA', 'Q7yKMW8h2sQ', 'Pr-YhkAZjFQ', 'KowqEilzgcs', '7h_KCmEX8qw', 'dws1IxL5N-E',
            'Ebyvi7ldonY', 'icXI3K47x-0', 'WaGMewRkBK0', 'h-gQQDDYLFU', '8C77EhDj6zQ', 'RvvqlgBu7EI',
            'ZPj4MIBs4o0', '4K1-AnvG61g', 'UUcIgERXgl0', '5Pr_Yx1XXCc', 'p8w0jOPdxoM', '6_SmMUgFyNc',
            'pYsYZEReuTI', 'CA1SlAWQhhY', 'G1AlE5eZSe4', 'COzxLCg2lv4',
            'qhT-B3Xqhss', 'kvu0Caqz2j8', 'XSQHMakMOKE', 'hliL7RBDDgU', 'WR2Or3vBP5w', 'Xv1wjLx1byQ',
            '0d_Ww7-3JCY', 'tr-chQnhbsY', 'JHR0bxAAHnI', 'jnFqUP9Dq8A', 'YB_o0jcubbQ', 'ENqo-qJ4Vq4',
            'JFddwusHU2E', '5PNinV1UQ2Y', 'yt8WEClckX8', 'C3NPaUeVYAo', 'C3NPaUeVYAo', 'CuxsuvuCJCU'],
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