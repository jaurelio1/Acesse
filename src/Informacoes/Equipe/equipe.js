import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Equipe = () =>(
    <div className='text'>
        <h5>Equipe:</h5>
        <hr/>

        <h5>Joab dos Santos Silva</h5>
        <h6>Coordenador</h6>
        <p align="justify">
        Graduado em Licenciatura Plena em Matemática pela Universidade Estadual da Paraíba - UEPB (2008), <br/> 
        Mestre em Ensino de Ciências e Matemática, com Educação Matemática como Área de Concentração, <br/> 
        pela Universidade Estadual da Paraíba - UEPB (2012), Mestre em Matemática, pela Universidade Estadual <br/> 
        da Paraíba - UEPB (2015). Atualmente é Professor D 401 do Instituto Federal de Educação, <br/>
        Ciência e Tecnologia da Paraíba - IFPB. 
        </p>
        <p>Lattes: <a href="http://lattes.cnpq.br/1803916478234921">http://lattes.cnpq.br/1803916478234921</a>  <br/>
        Contato: joab.silva@ifpb.edu.br
        </p>
        
        <hr/>
        
        <h5>Aparecida da Silva Xavier Barros</h5>
        <h6>Docente Colaboradora</h6>
        <p align="justify">
        Professora do Instituto Federal da Paraíba (IFPB). Licenciada em Pedagogia (FAFICA). Especialista em Ciências <br/> 
        da Educação (FATIN) e em Coordenação Pedagógica (FAFICA). Mestra em Ciências da Educação (ULHT). <br/> 
        Doutoranda em Educação Matemática e Tecnológica (EDUMATEC- UFPE). Pesquisa sobre tecnologias educacionais; <br/> 
        escolarização e desigualdades educacionais; formação docente e políticas de acesso e permanência no Ensino Superior. <br/>
        Coordenadora do Núcleo de Inovação e Tecnologias Educacionais -NITE.
        </p>
        <p>Lattes: <a href="http://lattes.cnpq.br/3662821147642329">http://lattes.cnpq.br/3662821147642329</a>  <br/>
        Contato: aparecida.barros@ifpb.edu.br
        </p>
        
        <hr/>

        <h5>Germana Silva de Oliveira</h5>
        <h6>Docente Colaboradora</h6>
        <p align="justify">
        Graduada em Serviço Social pela Universidade Estadual da Paraíba - UEPB em 2007, graduada em Letras-Libras <br/>
        pela Universidade Federal de Santa Catarina UFSC, em 2012,Especialista em Libras pela SOCIESC e Mestranda em Educação <br/> 
        pelo PPGEd da UFCG, na Linha 1 ? História, Política e Gestão Educacionais, Certificada pelo Ministério da Educação (PROLIBRAS) <br/>
        para interpretação e para o uso e ensino da Libras. Atuou como Tradutora/Intérprete da Libras <br/>
        na Escola de Audiocomunicação Demóstenes Cunha Lima EDAC, é professora no Instituto Federal de Educação Ciência <br/>
        e Tecnologia da Paraíba - IFPB, campus Campina Grande.
        </p>
        <p>Lattes: <a href=" http://lattes.cnpq.br/7518514326875202">http://lattes.cnpq.br/7518514326875202</a> <br/>
        Contato: germana.oliveira@ifpb.edu.br
        </p>

        <hr/>

        <h5>Jonathas Jeronimo Barbosa</h5>
        <h6>Docente Orientador</h6>
        <p align="justify">
        Possui graduação (Bacharelado e Licenciatura) em Matemática pela Universidade Federal da Paraíba (2004), <br/>
        mestrado em Engenharia Mecânica pela Universidade Federal da Paraíba (2008) <br/> 
        e doutorado em Engenharia Mecânica pela Universidade Federal da Paraíba (2012). <br/>
        Atualmente é professor dos cursos de Matemática, Física e Bacharelado em <br/>
        Engenharia da Computação do Instituto Federal da Paraíba - Campus Campina Grande. <br/>
        Atua na área de processamento de imagens, reconhecimento de padrões, caracterização de formas, <br/> 
        visão computacional e processamento mineral. <br/>
        </p>
        <p>Lattes: <a href=" http://lattes.cnpq.br/0508734259861101">http://lattes.cnpq.br/0508734259861101</a> <br/>
        Contato: jonathas.barbosa@ifpb.edu.br
        </p>

        <hr/>

        <h5>Cicero da Silva Pereira</h5>
        <h6>Docente Colaborador</h6>
        <p align="justify">
        Possui graduação em LICENCIATURA PLENA EM MATEMÁTICA pela Universidade <br/>
        Estadual da Paraíba (1997). Especialista em Ensino de Matemática Básica e Mestre <br/>
        em Ensino de Ciências e Matemática pela Universidade Estadual da Paraíba. Professor <br/>
        e pesquisador no Curso Superior de Licenciatura em Matemática e no Ensino Técnico <br/>
        Integrado de nível médio. Têm experiência na área de Educação Matemática com ênfase <br/>
        em Ensino e Aprendizagem de Matemática.
        </p>
        <p>Lattes: <a href=" http://lattes.cnpq.br/9158356522226428">http://lattes.cnpq.br/9158356522226428</a> <br/>
        Contato:  cicero.pereira@ifpb.edu.br
        </p>

        <hr/>        

        <h5>José Aurélio Epaminondas de Carvalho</h5>
        <h6>Discente Bolsista - Programador responsável</h6>
        <p align="justify">Natural da cidade de Serra Talhada-PE. Atualmente cursando a graduação em engenharia
        de computação no IFPB campus Campina Grande.
        </p>
        <p>Lattes: <a href=" http://lattes.cnpq.br/8216108543777474">http://lattes.cnpq.br/8216108543777474</a> <br/>
        Contato: jose.aurelio@academico.ifpb.edu.br
        </p>
        <Link to="/" className="link">Voltar</Link>       
    </div>
);

export default Equipe;