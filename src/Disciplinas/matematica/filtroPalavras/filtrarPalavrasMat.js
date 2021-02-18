import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DefAresta from '../img/definicoes/aresta-def.png';
import DefCilinOb from '../img/definicoes/cilindro-obliquo-def.png';
import DefCilinReto from '../img/definicoes/cilindro-reto-def.png';
import DefCone from '../img/definicoes/cone-def.png';
import DefCorpoRed from '../img/definicoes/corpos-redondos-def.png';
import DefCubo from '../img/definicoes/cubo-def.png';
import DefDodeRegular from '../img/definicoes/dodecaedro-regular-def.png';
import DefExtSeg from '../img/definicoes/extremos-segmento-def.png';
import DefFace from '../img/definicoes/face-def.png';
import DefHexRegular from '../img/definicoes/hexaedro-regular-def.png';
import DefIcoRegular from '../img/definicoes/icosaedro-regular-def.png';
import DefLadoPoli from '../img/definicoes/lado-poligono-def.png';
import DefOctRegular from '../img/definicoes/octaedro-regular-def.png';
import DefParale from '../img/definicoes/paralelepipedo-def.png';
import DefPiramide from '../img/definicoes/piramide-def.png';
import DefPiramideHex from '../img/definicoes/piramide-hexagonal-def.png';
import DefPiramidePent from '../img/definicoes/piramide-pentagonal-def.png';
import DefPiramideQua from '../img/definicoes/piramide-quadrangular-def.png';
import DefPiramideTri from '../img/definicoes/piramide-triangular-def.png';
import DefPlan from '../img/definicoes/planificacao-def.png';
import DefPolieConv from '../img/definicoes/poliedro-convexo-def.png';
import DefPolie from '../img/definicoes/poliedro-def.png';
import DefPolieNConv from '../img/definicoes/poliedro-nao-convexo-def.png';
import DefPolieRegular from '../img/definicoes/poliedro-regular-def.png';
import DefPoliConv from '../img/definicoes/poligono-convexo-def.png';
import DefPoliNConv from '../img/definicoes/poligono-nao-convexo-def.png';
import DefPoliRegular from '../img/definicoes/poligono-regular-def.png';
import DefPonto from '../img/definicoes/ponto-def.png';
import DefPrisma from '../img/definicoes/prisma-def.png';
import DefPrismaHex from '../img/definicoes/prisma-hexagonal-def.png';
import DefPrismaObli from '../img/definicoes/prisma-obiquo-def.png';
import DefPrismaPent from '../img/definicoes/prisma-pentagonal-def.png';
import DefPrismaQua from '../img/definicoes/prisma-quadrangular-def.png';
import DefPrismaReto from '../img/definicoes/prisma-reto-def.png';
import DefPrismaTri from '../img/definicoes/prisma-triangular-def.png';
import DefRetCoin from '../img/definicoes/retas-coincidentes-def.png';
import DefRetConc from '../img/definicoes/retas-concorrentes-def.png';
import DefRetCop from '../img/definicoes/retas-coplanares-def.png';
import DefRetRev from '../img/definicoes/retas-reversas-def.png';
import DefSegCol from '../img/definicoes/segmentos-colineares-def.png';
import DefSegCons from '../img/definicoes/segmentos-consecutivos-def.png';
import DefSemi from '../img/definicoes/semirreta-def.png';
import DefSolidGeo from '../img/definicoes/solidos-geometricos-def.png';
import DefTetraReg from '../img/definicoes/tetraedro-regular-def.png';
import DefVert from '../img/definicoes/vertice-def.png';

export default class Filtro extends Component{
    constructor(){
        super();
        this.state = {
            definicao: '',
            imagem: '', 
            videoId: '',
            isOpen: false,
            definicoes:[DefAresta, DefCilinOb, DefCilinReto, DefCone, DefCorpoRed, 
            DefCubo, DefDodeRegular, DefExtSeg, DefFace, DefHexRegular, DefIcoRegular,
            DefOctRegular, DefLadoPoli, DefParale, DefPiramide, DefPiramideTri, DefPiramideQua,
            DefPiramidePent, DefPiramideHex, DefPlan, DefPolie, DefPolieConv, DefPolieNConv,
            DefPolieRegular, DefPrisma, DefPrismaObli, DefPonto,
            DefPrismaReto, DefPrismaTri, DefPrismaQua, DefPrismaPent, DefPrismaHex, DefPoliConv,
            DefPoliNConv, DefPoliRegular, DefRetCoin, DefRetConc, DefRetRev, DefRetCop,
            DefSemi, DefSegCons, DefSegCol, DefSolidGeo, DefTetraReg, DefVert],
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
        };
        this.letra = sessionStorage.getItem("letra");
    }
    
    openModal(){
        this.setState({isOpen: true});
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
                if(this.filtroDePalavras(this.letra)[i] === this.state.palavras[j]){
                    indice.push(j);
                }                
            }
        }
        return indice;
    }

    //definicao: this.state.definicoes[this.indicePalavrasFiltradas()[indice]],
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
                                                definicao: this.state.definicoes[this.indicePalavrasFiltradas()[indice]],
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