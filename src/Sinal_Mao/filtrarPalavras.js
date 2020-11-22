import React, {Component} from 'react';

export default class Filtro extends Component{
    constructor(){
        super();

        this.letra = sessionStorage.getItem("letra");
        this.palavras = ['Cubo', 'Extremos do Segmento', 'Semirreta', 'Retas coplanares', 'Segmentos colineares', 'Segmentos consecutivos'];
    }    

    filtroDePalavras = (query) =>{
        return this.palavras.filter(el => el[0].toLowerCase() === query.toLowerCase());
    }

    render(){
        return(
            <div>
                {this.filtroDePalavras(this.letra)}
                {console.log(this.filtroDePalavras(this.letra))}
            </div>
        );
    }
}