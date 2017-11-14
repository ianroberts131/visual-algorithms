import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { randomlyGenerateArray } from '../helpers';
import { binarySearch, linearSearch } from '../data/algorithms';

import searchState from './search';
import search from './search';

describe('search reducer', () => {

  it('Should return SEARCH_BASE_STATE', () => {

    var searchArray = randomlyGenerateArray(225, 999);
    const state = searchState
    const action = {
    type: "SEARCH_BASE_STATE"
    }

    const results = search(state, action)

    expect(results).toEqual({
      searchArray: searchArray,
      searchAlgorithm: binarySearch,
      index: "",
      low: 0,
      high: searchArray.length - 1,
      testItem: "",
      target: "",
      targetFound: false,
      iterations: 0,
      searchNumber: searchArray[Math.floor((Math.random() * 225) + 1)],
      isRunning: false,
      paused: false
    });
  });


});
