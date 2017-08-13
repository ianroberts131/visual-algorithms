import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import Home from './pages/Home';
import SearchAlgorithms from './pages/SearchAlgorithms';
import SortAlgorithms from './pages/SortAlgorithms';

import { Router, Route, IndexRoute } from 'react-router';
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
        <Route path="/sort" component={ SortAlgorithms }>
        </Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
