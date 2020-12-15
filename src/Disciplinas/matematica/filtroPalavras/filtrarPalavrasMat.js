import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DefCubo from '../img/Def_Cubo.png';
import DefExtSeg from '../img/Def_ExtSeg.png';
import DefSemi from '../img/Def_semirreta.png';
import DefRetCop from '../img/Def_RetCop.png';
import DefSegcol from '../img/Def_SegCol.png';
import DefSegcons from '../img/Def_SegCons.png';

export default class Filtro extends Component{
    constructor(){
        super();
        this.state = {
            definicao: '',
            imagem: '', 
            videoId: '',
            isOpen: false,
            definicoes: [DefCubo, DefExtSeg, DefSemi, DefRetCop, DefSegcol, DefSegcons],
            palavras : ['Cubo', 'Extremos do Segmento', 'Semirreta', 'Retas coplanares', 'Segmentos colineares', 'Segmentos consecutivos'],
            videosLinks: [ 'VvgeQnOnuzA', 'Pr-YhkAZjFQ', 'JFddwusHU2E', 'ENqo-qJ4Vq4', 'yt8WEClckX8', '5PNinV1UQ2Y'],
        };
        this.letra = sessionStorage.getItem("letra");
    }
    
    openModal(){
        this.setState({isOpen: true});
    }

    filtroDePalavras = (query) =>{
        return this.state.palavras.filter(el => el[0].toLowerCase() === query.toLowerCase());
    }
    
    indicePalavrasFiltradas = () =>{
        let indice = []
        for(let i = 0; i < this.filtroDePalavras(this.letra).length; i++){
            for(let j = 0; j < this.state.palavras.length; j++){
                if(this.filtroDePalavras(this.letra)[i] === this.state.palavras[j]){
                    indice.push(j);
                }                
            }
        }
        return indice;
    }

    render(){
        return(
            <div className="videos">                
                <div className="lista_videos">  
                    <div className="sinal-palavra">
                        <ol className="scrollbox">
                            <h6><u>Palavras</u></h6>                            
                            {this.filtroDePalavras(this.letra).map((letra, indice) =>                               
                                (
                                    <article key={indice}>
                                        <li>
                                            <a href="#"
                                            onClick={() => this.setState({isOpen:true,
                                                videoId:this.state.videosLinks[this.indicePalavrasFiltradas()[indice]]})}>
                                                {letra}
                                                {console.log(this.indicePalavrasFiltradas())}
                                            </a>                                                 
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
                <Link to="/sinal_de_mao">Voltar</Link>                             
            </div>            
        );
    }
}