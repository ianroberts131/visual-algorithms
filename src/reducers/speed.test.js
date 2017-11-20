import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import speed from './speed';
import speedState from './speed';

describe('speed reducer', () => {

  it('Should return fast', () => {
    const state = speedState
    const action = {
    speed: "fast"
    }

    const results = speed(state, action)

    expect(results).toEqual({
      speedString: "fast",
      regularActive: false,
      slowActive: false,
      fastActive: true,
      intervalSpeed: 500
    });
  });

  it('Should return slow', () => {
    const state = speedState
    const action = {
    speed: "slow"
    }

    const results = speed(state, action)

    expect(results).toEqual({
      speedString: "slow",
      regularActive: false,
      slowActive: true,
      fastActive: false,
      intervalSpeed: 2000
    });
  });

  it('Should return regular', () => {
    const state = speedState
    const action = {
    speed: "regular"
    }

    const results = speed(state, action)

    expect(results).toEqual({
      speedString: "regular",
      regularActive: true,
      slowActive: false,
      fastActive: false,
      intervalSpeed: 1000
    });
  });

});
