/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import '../public/style/style.css';
import AllPokemonIndex from './components/AllPokemonIndex';
import Header from './components/Header';
import OnePokemon from './components/OnePokemon';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route path="/pokemon/:name" component={OnePokemon} />
          <Route path="/" component={AllPokemonIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
