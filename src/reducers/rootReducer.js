import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import speed from './speed';

const rootReducer = combineReducers({ search, speed, routing: routerReducer });

export default rootReducer;