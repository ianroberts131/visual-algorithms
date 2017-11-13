import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import speed from './speed';

describe('speed reducer', () => {

  it('Should return fast', () => {

    const state = {
      ...state,
      speedString: "regular",
      regularActive: true,
      slowActive: false,
      fastActive: false,
      intervalSpeed: 1000
    }

    const action = 'fast'
    
    const results = speed(state, action)

    expect(results).toEqual({
      speedString: "fast",
      regularActive: false,
      slowActive: false,
      fastActive: true,
      intervalSpeed: 500
    });
  });

});
