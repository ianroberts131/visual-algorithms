// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray } from '../helpers';
import { selectionSort, insertionSort, bubbleSort } from '../data/algorithms';

// create an array for the search area
var sortArray = randomlyGenerateArray(10, 100, false);

const sortState = {
  sortArray: sortArray,
  sortAlgorithm: selectionSort,
  iterations: 0,
  sortedGroupIndex: 0,
  currentLow: 0,
  currentlyChecking: 0,
  insertionIndex: 1,
  insertionKey: sortArray[1],
  bubbleSwapsCounter: 0,
  bubbleIndex: 0,
  bubbleSwapping: false,
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
        iterations: 0,
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

      case 'START_INSERTION_SORT' :
      var insertionArray = randomlyGenerateArray(10, 100, false);
        return {
          ...state,
          sortArray: insertionArray,
          sortAlgorithm: insertionSort,
          currentlyChecking: 0,
          insertionIndex: 1,
          insertionKey: insertionArray[1],
          isRunning: true,
          iterations: 0,
          isSorted: false
        }

      case 'INSERTION_SORT' :
        return {
          ...state,
          sortAlgorithm: insertionSort,
          iterations: action.iterations,
          currentlyChecking: action.currentlyChecking,
          insertionIndex: action.insertionIndex,
          insertionKey: action.insertionKey,
          isRunning: action.isRunning,
          isSorted: action.isSorted
        }

        case 'START_BUBBLE_SORT' :
        var bubbleArray = randomlyGenerateArray(10, 100, false);
          return {
            ...state,
            sortArray: bubbleArray,
            sortAlgorithm: bubbleSort,
            bubbleSwapsCounter: 0,
            bubbleIndex: 0,
            bubbleSwapping: false,
            isRunning: true,
            iterations: 0,
            isSorted: false
          }

        case 'BUBBLE_SORT' :
          return {
            ...state,
            sortAlgorithm: bubbleSort,
            iterations: action.iterations,
            bubbleSwapsCounter: action.bubbleSwapsCounter,
            bubbleIndex: action.bubbleIndex,
            bubbleSwapping: action.bubbleSwapping,
            isRunning: action.isRunning,
            isSorted: action.isSorted
          }

    default:
      return state;
  }
}

export default sort;
