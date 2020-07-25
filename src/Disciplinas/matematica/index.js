import React, {Component} from 'react';
import Ponto from '../../VideoPlay/Videos_mat/Ponto.mp4';
import Semirreta from '../../VideoPlay/Videos_mat/Semirreta.mp4';
import Retas_coplanares from '../../VideoPlay/Videos_mat/Retas_coplanares.mp4';
import './style.css';

export default class Matematica extends Component{
    constructor(){
        super();

        this.pontoRef = React.createRef();
        this.semiRef = React.createRef();
        this.retCopRef = React.createRef();
    }

    playVideoPonto = () =>{
        this.pontoRef.current.play();        
    }
    playVideoSemi = () =>{
        this.semiRef.current.play();
    }
    playVideoRetCop = () =>{
        this.retCopRef.current.play();
    }    

    render(){
        return(
            <div className="videos">
                <div className="lista_videos">
                    <a href={Ponto} onClick={this.playVideoPonto}>Ponto</a>
                    <a href={Semirreta} onClick={this.playVideoSemi}>Semirreta</a>
                    <a href={Retas_coplanares} onClick={this.playVideoRetCop}>Retas Coplanares</a>
                </div>
                <button>Voltar</button>                               
            </div>
        );
    }
}