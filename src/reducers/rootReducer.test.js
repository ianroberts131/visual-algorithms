import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import speed from './speed';
import sort from './sort';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('Should Create a rootReducer', () => {
    expect(rootReducer).toEqual(rootReducer);
  });
});
