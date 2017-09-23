import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import speed from './speed';
import sort from './sort';
import tabControl from './tabControl';

const rootReducer = combineReducers({ search, speed, sort, tabControl, routing: routerReducer });

export default rootReducer;
