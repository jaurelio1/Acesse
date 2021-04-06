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

import React, {Component} from 'react';

export default class GetImagem extends Component{
    constructor(props){
        super();
    }

    trocaTipoImagem(){
        switch(this.props.informaLetra){
            case 'A':
                return A;
            case 'B':
                return B;
            case 'C':
                return C;            
            case 'D':
                return D;
            case 'E':
                return E;
            case 'F':
                return F;
            case 'G':
                return G;
            case 'H':
                return H;
            case 'I':
                return I;
            case 'J':
                return J;
            case 'K':
                return K;
            case 'L':
                return L;
            case 'M':
                return M;
            case 'N':
                return N;
            case 'O':
                return O;
            case 'P':
                return P;
            case 'Q':
                return Q;
            case 'R':
                return R;
            case 'S':
                return S;
            case 'T':
                return T;
            case 'U':
                return U;
            case 'V':
                return V;
            case 'W':
                return W;
            case 'X':
                return X;
            case 'Y':
                return Y;
            case 'Z':
                return Z;                
        }
    }

    render(){
        return(
            <section>
                <img src={this.trocaTipoImagem()} style={{width:40}, {height:60}}/>
            </section>
        );
    }

}