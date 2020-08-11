import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';

ReactDOM.render(
  <AuthContext.Provider value={false}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/Video" component={CadastroVideo} exact />
        <Route path="/cadastro/Categoria" component={CadastroCategoria} exact />
        <PrivateRoute path="/admin" component={Admin} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </AuthContext.Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
