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
  testItem: "",
  isRunning: false
}

function sort(state = sortState, action) {
  switch(action.type) {
    case 'START_SELECTION_SORT' :
      console.log("I'm in selection sort!!");
      return {
        ...state,
        sortArray: sortArray,
        sortAlgorithm: selectionSort,
        sortedGroupIndex: 0,
        currentLow: 0,
        isRunning: true
      }

    case 'SELECTION_SORT' :
    return {
      ...state,
      sortAlgorithm: selectionSort,
      iterations: action.iterations,
      sortedGroupIndex: action.sortedGroupIndex,
      currentLow: action.currentLow,
      testItem: action.testItem,
      isRunning: action.isRunning
    }

    default:
      return state;
  }
}

export default sort;
