import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Main from './components/pages/Main';
import Home from './components/pages/Home';
import SearchAlgorithms from './components/pages/SearchAlgorithms';
import './css/index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path="/search" component={ SearchAlgorithms }>
        <Route path="/search/:algorithm/:speed" component={ SearchAlgorithms }></Route>
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
