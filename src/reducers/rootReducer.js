import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';

const rootReducer = combineReducers({ search, routing: routerReducer });

export default rootReducer;