/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import '../public/style/style.css';
import AllPokemonIndex from './components/AllPokemonIndex';
import Header from './components/Header';
import OnePokemonShow from './components/OnePokemonShow';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route path="/pokemon/:dex" component={OnePokemonShow} />
          <Route path="/" component={AllPokemonIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
