// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray } from '../helpers';
import { selectionSort } from '../data/algorithms';

// create an array for the search area
var sortArray = randomlyGenerateArray(10, 100, false);

const sortState = {
  sortArray: sortArray,
  sortAlgorithm: selectionSort,
  iterations: 0,
  sortedGroupIndex: 0,
  currentLow: 0,
  currentlyChecking: 0,
  isRunning: false,
  isSorted: false
}

function sort(state = sortState, action) {
  switch(action.type) {
    case 'START_SELECTION_SORT' :
      return {
        ...state,
        sortArray: randomlyGenerateArray(10, 100, false),
        sortAlgorithm: selectionSort,
        sortedGroupIndex: 0,
        currentLow: 0,
        currentlyChecking: 0,
        isRunning: true,
        isSorted: false
      }

    case 'SELECTION_SORT' :
    return {
      ...state,
      sortAlgorithm: selectionSort,
      iterations: action.iterations,
      sortedGroupIndex: action.sortedGroupIndex,
      currentLow: action.currentLow,
      currentlyChecking: action.currentlyChecking,
      isRunning: action.isRunning,
      isSorted: action.isSorted
    }

    default:
      return state;
  }
}

export default sort;
