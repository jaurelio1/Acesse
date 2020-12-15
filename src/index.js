import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Mat from './Disciplinas/matematica';
import Fis from './Disciplinas/fisica';
import Equipe from './Informacoes/Equipe/equipe';
import Projeto from './Informacoes/Projeto/projeto';
import Alfa from './Sinal_Mao/alfabeto';
import Filtro from './Disciplinas/matematica/filtroPalavras/filtrarPalavrasMat';

//import * as serviceWorker from './serviceWorkerMat';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path='/matematica' component={Mat}/>
        <Route path='/engenharia' component={Fis}/>
        <Route path='/equipe' component={Equipe}/>
        <Route path='/projeto' component={Projeto}/>
        <Route path='/sinal_de_mao' component={Alfa}/>
        <Route path='/palavras-filtradas' component={Filtro}/>
      </Switch>
    </BrowserRouter>        
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
