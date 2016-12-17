import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/pages/Home';
import SearchAlgorithms from './components/pages/SearchAlgorithms';
import './css/index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/search" component={ SearchAlgorithms }>
          <Route path="/search/:algorithm/:speed" component={ SearchAlgorithms }></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
