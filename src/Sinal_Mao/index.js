import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MatSinal from './Mat/MatSinal';

export default class SinalMao extends Component{
    constructor(){
        super();
        this.state = {
            linha1 : ["A","F","K","P","U", "Z"],
            linha2 : ["B","G","L","Q","V", "Ç"],
            linha3 : ["C","H","M","R","W"],
            linha4 : ["D","I","N","S","X"],
            linha5 : ["E","J","O","T","Y"],            
            letra : "",
            palavras : ['Cubo', 'Extremos do Segmento', 'Semirreta', 'Retas coplanares', 'Segmentos colineares', 'Segmentos consecutivos'],            
        }
    }    

    filtraPalavras(){
        let filtro = this.state.palavras.filter(el => el.substr(0, 1).toLowerCase() === this.state.letra.toLowerCase());
        return filtro;
    }
    
    render(){
        return(
            <div className="block">
                <div class="container-body">
                    <div class="linha1">
                        {this.state.linha1.map((letra1, indice1)=>(
                            <Link to="/matsinal" onClick={()=> this.setState({letra:letra1})}>                                
                                <h3>{letra1}</h3>                                                               
                            </Link>
                        ))}
                    </div>
                    <div class="linha2">
                        {this.state.linha2.map((letra2, indice2)=>(
                            <a href="#" onClick={()=>this.setState({letra:letra2})}>
                                <h3>{letra2}</h3>
                            </a>
                        ))}
                    </div>
                    <div class="linha3">
                        {this.state.linha3.map((letra3, indice3)=>(
                            <a href="#" onClick={()=>this.setState({letra:letra3})}>
                                <h3>{letra3}</h3>
                            </a>
                        ))}
                    </div>
                    <div class="linha4">
                        {this.state.linha4.map((letra4, indice4)=>(
                            <a href="#" onClick={()=>this.setState({letra:letra4})}>                                
                                <h3>{letra4}</h3>
                            </a>
                        ))}
                    </div>
                    <div class="linha5">
                        {this.state.linha5.map((letra5, indice5)=>(
                            <a href="#" onClick={()=>this.setState({letra:letra5})}>
                                <h3>{letra5}</h3>
                            </a>
                        ))}
                    </div>                    
                </div>
                {console.log(this.filtraPalavras())}
                <Link to="/matematica">Voltar</Link>                
            </div>             
        );
    }
}