import { randomlyGenerateArray } from '../helpers';
import { binarySearch, linearSearch } from '../data/algorithms';

import searchState from './search';
import search from './search';

describe('search reducer', () => {

  it('Should return SEARCH_BASE_STATE', () => {
    const state = searchState
    const action = {
    type: "SEARCH_BASE_STATE"
    }
    const results = search(state, action)

    expect(results).toEqual({
      searchArray: results.searchArray,
      searchAlgorithm: {"description": "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.", "name": "Binary Search", "url": "binary-search"},
      index: "",
      low: 0,
      high: 224,
      testItem: "",
      target: "",
      targetFound: false,
      iterations: 0,
      searchNumber: results.searchNumber,
      isRunning: false,
      paused: false
    });
  });

  it('Should return START_BINARY_SEARCH', () => {
    const state = searchState
    const action = {
    type: "START_BINARY_SEARCH"
    }
    const results = search(state, action)

    expect(results).toEqual({
      searchArray: results.searchArray,
      searchAlgorithm: {"description": "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.", "name": "Binary Search", "url": "binary-search"},
      index: "",
      low: 0,
      high: 224,
      testItem: "",
      target: "",
      targetFound: false,
      iterations: 0,
      searchNumber: results.searchNumber,
      isRunning: true,
      paused: false
    });
  });

  it('Should return BINARY_SEARCH', () => {
    const state = searchState
    const action = {
    type: "START_BINARY_SEARCH"
    }
    const results = search(state, action)

    const state2 = results
    const action2 = {
    type: "BINARY_SEARCH"
    }
    const results2 = search(state2, action2)

    expect(results2).toEqual({
      searchArray: results.searchArray,
      searchAlgorithm: {"description": "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.", "name": "Binary Search", "url": "binary-search"},
      low: action.low,
      high: action.high,
      mid: action.mid,
      iterations: action.iterations,
      target: action.target,
      testItem: action.testItem,
      index: action.index,
      isRunning: action.isRunning,
      targetFound: action.targetFound,
      paused: results.paused,
      searchNumber: results.searchNumber
    });
  });


    it('Should return START_LINEAR_SEARCH', () => {
      const state = searchState
      const action = {
      type: "START_LINEAR_SEARCH"
      }
      const results = search(state, action)

      expect(results).toEqual({
        searchArray: results.searchArray,
        searchAlgorithm: {"description": "A search algorithm that finds the position of a target value within an array (sorted or unsorted). It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.", "name": "Linear Search", "url": "linear-search"},
        index: "",
        low: 0,
        high: 224,
        testItem: "",
        target: "",
        targetFound: false,
        iterations: 0,
        searchNumber: results.searchNumber,
        isRunning: true,
        paused: false
      });
    });

    it('Should return LINEAR_SEARCH', () => {
      const state = searchState
      const action = {
      type: "START_LINEAR_SEARCH"
      }
      const results = search(state, action)

      const state2 = results
      const action2 = {
      type: "LINEAR_SEARCH"
      }
      const results2 = search(state2, action2)

      expect(results2).toEqual({
        searchArray: results.searchArray,
        searchAlgorithm: {"description": "A search algorithm that finds the position of a target value within an array (sorted or unsorted). It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.", "name": "Linear Search", "url": "linear-search"},
        low: action.low,
        high: action.high,
        mid: action.mid,
        iterations: action.iterations,
        target: action.target,
        testItem: action.testItem,
        index: action.index,
        isRunning: action.isRunning,
        targetFound: action.targetFound,
        paused: results.paused,
        searchNumber: results.searchNumber
      });
    });


});
