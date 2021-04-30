import React from 'react';
import {Link} from 'react-router-dom';

const Projeto = () =>(
    <div className="text">
        <Link to="/">Home</Link>
        <p align="justify">
           Este projeto, portanto, tem por objetivo o desenvolvimento de uma plataforma digital para a qual se propõe o nome “Acesse”. <br/>
        A plataforma visa apoiar a produção e divulgação de glossários Libras-Português em formato de vídeo com foco nas áreas citadas e que tenham sido criados por pesquisadores do Campus. <br/>
        Acredita-se que esta ferramenta possa contribuir para o aumento do vocabulário técnico específico e, ao mesmo tempo, ajudar na aglutinação de vários sinais-termo que se encontram dispersos em diferentes bases de dados.
        </p>
        <p align="justify">
            A principal motivação para o desenvolvimento deste projeto reside na possibilidade de apoiar a produção e divulgação de glossários Libras-Português em formato de vídeo, <br/> 
        sobretudo nas áreas de Ciência, Tecnologia, Engenharia e Matemática, visando contribuir para preencher a lacuna observada por alguns estudos em relação à falta de um léxico adequado para termos científicos e técnicos em Libras.
        </p>
    </div>
)

export default Projeto;