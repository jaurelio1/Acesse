import React, {Component} from 'react';

import './style.css';
import { Link } from 'react-router-dom';

import ModalVideo from 'react-modal-video';

export default class Matematica extends Component{
    constructor(){
        super();
        this.state = {
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
                        <a href="#" onClick={() => this.setState({isOpenEx: true})}>Extremos do segmento</a>                    
                        <a href="#"onClick={() => this.setState({isOpenSemi: true})}>Semirreta</a>                                     
                        <a href="#" onClick={() => this.setState({isOpenRetCop: true})}>Retas coplanares</a>                                     
                        <a href="#" onClick={() => this.setState({isOpenSegCol: true})}>Segmentos colineares</a>                                     
                        <a href="#" onClick={() => this.setState({isOpenSegCon: true})}>Segmentos consecutivos</a>
                    </div>                                        
                </div>
                <Link to="/">Voltar</Link>                             
            </div>            
        );
    }
}