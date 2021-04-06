import React, {Component} from 'react';


export default class ScrollBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            palavras: [],
        };
    }

    setPalavras = () =>{
        this.state.palavras = this.props.ehPalavraFiltrada;
        return this.state.palavras;
    }
    render(){
        return(
            <section>
                <ol className="scrollbox">
                    <h6><u>Palavras</u></h6>                            
                    {this.setPalavras().map((link, indice) =>                               
                        (
                            <article key={indice}>
                                <li>
                                    <a href="#"
                                    onClick={() =>{
                                        this.setState({isOpen:true,
                                        definicao: this.state.palavras[indice]});
                                        this.props.retornaPalavra(this.state.palavras[indice]);
                                    }}>
                                        {this.state.palavras[indice]}</a> 
                                </li>                                                                      
                            </article>
                        )
                    )}                                                                     
                </ol>
            </section>
        );
    }
} 