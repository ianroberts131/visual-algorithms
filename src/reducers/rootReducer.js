import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import speed from './speed';
import sort from './sort';

const rootReducer = combineReducers({ search, speed, sort, routing: routerReducer });

export default rootReducer;
