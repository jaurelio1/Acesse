import { render } from '@testing-library/react';
import React, {Component} from 'react';

import DefAresta from './img/definicoes/aresta-def.png';
import DefCilinOb from './img/definicoes/cilindro-obliquo-def.png';
import DefCilinReto from './img/definicoes/cilindro-reto-def.png';
import DefCone from './img/definicoes/cone-def.png';
import DefCorpoRed from './img/definicoes/corpos-redondos-def.png';
import DefCubo from './img/definicoes/cubo-def.png';
import DefDodeRegular from './img/definicoes/dodecaedro-regular-def.png';
import DefExtSeg from './img/definicoes/extremos-segmento-def.png';
import DefFace from './img/definicoes/face-def.png';
import DefHexRegular from './img/definicoes/hexaedro-regular-def.png';
import DefIcoRegular from './img/definicoes/icosaedro-regular-def.png';
import DefLadoPoli from './img/definicoes/lado-poligono-def.png';
import DefOctRegular from './img/definicoes/octaedro-regular-def.png';
import DefParale from './img/definicoes/paralelepipedo-def.png';
import DefPiramide from './img/definicoes/piramide-def.png';
import DefPiramideHex from './img/definicoes/piramide-hexagonal-def.png';
import DefPiramidePent from './img/definicoes/piramide-pentagonal-def.png';
import DefPiramideQua from './img/definicoes/piramide-quadrangular-def.png';
import DefPiramideTri from './img/definicoes/piramide-triangular-def.png';
import DefPlan from './img/definicoes/planificacao-def.png';
import DefPolieConv from './img/definicoes/poliedro-convexo-def.png';
import DefPolie from './img/definicoes/poliedro-def.png';
import DefPolieNConv from './img/definicoes/poliedro-nao-convexo-def.png';
import DefPolieRegular from './img/definicoes/poliedro-regular-def.png';
import DefPoliConv from './img/definicoes/poligono-convexo-def.png';
import DefPoliNConv from './img/definicoes/poligono-nao-convexo-def.png';
import DefPoliRegular from './img/definicoes/poligono-regular-def.png';
import DefPonto from './img/definicoes/ponto-def.png';
import DefPrisma from './img/definicoes/prisma-def.png';
import DefPrismaHex from './img/definicoes/prisma-hexagonal-def.png';
import DefPrismaObli from './img/definicoes/prisma-obiquo-def.png';
import DefPrismaPent from './img/definicoes/prisma-pentagonal-def.png';
import DefPrismaQua from './img/definicoes/prisma-quadrangular-def.png';
import DefPrismaReto from './img/definicoes/prisma-reto-def.png';
import DefPrismaTri from './img/definicoes/prisma-triangular-def.png';
import DefRetCoin from './img/definicoes/retas-coincidentes-def.png';
import DefRetConc from './img/definicoes/retas-concorrentes-def.png';
import DefRetCop from './img/definicoes/retas-coplanares-def.png';
import DefRetRev from './img/definicoes/retas-reversas-def.png';
import DefSegCol from './img/definicoes/segmentos-colineares-def.png';
import DefSegCons from './img/definicoes/segmentos-consecutivos-def.png';
import DefSemi from './img/definicoes/semirreta-def.png';
import DefSolidGeo from './img/definicoes/solidos-geometricos-def.png';
import DefTetraReg from './img/definicoes/tetraedro-regular-def.png';
import DefVert from './img/definicoes/vertice-def.png';

export default class ImagensDef extends Component{
    constructor(props){
        super();
    }

    definicao(){
        switch (this.props.imagem) {
            case 'Aresta':
                return DefAresta;            
            case 'Cilindro Oblíquo':
                return DefCilinOb;
            case 'Cilindro Reto':
                return DefCilinReto;
            case 'Cone':
                return DefCone;
            case 'Corpos Redondos':
                return DefCorpoRed;
            case 'Cubo':
                return DefCubo;
            case 'Dodecaedro Regular':
                return DefDodeRegular;
            case 'Extremos do Segmento':
                return DefExtSeg;
            case 'Face':
                return DefFace;
            case 'Hexaedro Regular':
                return DefHexRegular;
            case 'Icosaedro Regular':
                return DefIcoRegular;
            case 'Lado do Polígono':
                return DefLadoPoli;
            case 'Octaedro Regular':
                return DefOctRegular;            
            case 'Paralelepípedo':
                return DefParale;
            case 'Pirâmide':
                return DefPiramide;
            case 'Pirâmide Triangular':
                return DefPiramideTri;
            case 'Pirâmide Quadrangular':
                return DefPiramideQua;
            case 'Pirâmide Pentagonal':
                return DefPiramidePent;
            case 'Pirâmide Hexagonal':
                return DefPiramideHex;
            case 'Planificação':
                return DefPlan;
            case 'Poliedro':
                return DefPolie; 
            case 'Poliedro Convexo':
                return DefPolieConv;
            case 'Poliedro Não Convexo':
                return DefPolieNConv;
            case 'Poliedro Regular':
                return DefPolieRegular;
            case 'Prisma':
                return DefPrisma;
            case 'Prisma Oblíquo':
                return DefPrismaObli;
            case 'Ponto':
                return DefPonto;
            case 'Prisma Reto':
                return DefPrismaReto;
            case 'Prisma Triangular':
                return DefPrismaTri;
            case 'Prisma Quadrangular':
                return DefPrismaQua
            case 'Prisma Pentagonal':
                return DefPrismaPent;
            case 'Prisma Hexagonal':
                return DefPrismaHex;
            case 'Polígono Convexo':
                return DefPoliConv;
            case 'Polígono Não Convexo':
                return DefPoliNConv;
            case 'Polígono Regular':
                return DefPoliRegular;
            case 'Retas Coincidentes':
                return DefRetCoin;
            case 'Retas Concorrentes':
                return DefRetConc;
            case 'Retas Reversas':
                return DefRetRev;
            case 'Retas Coplanares':
                return DefRetCop;
            case 'Semirreta':
                return DefSemi;
            case 'Segmentos Consecutivos':
                return DefSegCons;
            case 'Segmentos Colineares':
                return DefSegCol;
            case 'Sólido Geométrico':
                return DefSolidGeo;
            case 'Tetraedro Regular':
                return DefTetraReg;
            case 'Vértice':
                return DefVert;            
        }
    }
    render(){
        return(
            <section id="input-definicao">
                <span>Definição - Português</span>
                <img src={this.definicao()}/>
            </section>
            
        );
    }
}