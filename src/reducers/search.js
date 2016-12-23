// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray } from '../helpers';
import { binarySearch, sequentialSearch } from '../data/algorithms';


// create an array for the grid
var searchArray = randomlyGenerateArray(400);

// create a search object, which will house all the state data within the search algorithms page
const searchState = {
  searchArray: searchArray,
  searchAlgorithm: binarySearch,
  index: "",
  low: 0,
  high: searchArray.length - 1,
  testItem: "",
  target: "",
  targetFound: false,
  iterations: 0,
  searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)],
  isRunning: false

}

function search(state = searchState, action) {
  switch(action.type) {
    case 'START_BINARY_SEARCH' :
      return {
        ...state,
        searchArray: searchArray,
        searchAlgorithm: binarySearch,
        index: "",
        low: 0,
        high: searchArray.length - 1,
        testItem: "",
        target: "",
        targetFound: false,
        iterations: 0,
        searchNumber: searchArray[Math.floor((Math.random() * 400 ) + 1)],
        isRunning: true
      }
      
    case 'BINARY_SEARCH' :      
      return {
        ...state,
        searchAlgorithm: binarySearch,
        low: action.low,
        high: action.high,
        mid: action.mid,
        iterations: action.iterations,
        target: action.target,
        testItem: action.testItem,
        index: action.index,
        isRunning: action.isRunning,
        targetFound: action.targetFound,
      }
      
      case 'START_SEQUENTIAL_SEARCH' :
      return {
        ...state,
        searchArray: searchArray,
        searchAlgorithm: sequentialSearch,
        index: "",
        low: 0,
        high: searchArray.length - 1,
        testItem: "",
        target: "",
        targetFound: false,
        iterations: 0,
        searchNumber: searchArray[Math.floor((Math.random() * 400 ) + 1)],
        isRunning: true
      }
      
    case 'SEQUENTIAL_SEARCH' :      
      return {
        ...state,
        searchAlgorithm: sequentialSearch,
        low: action.low,
        high: action.high,
        mid: action.mid,
        iterations: action.iterations,
        target: action.target,
        testItem: action.testItem,
        index: action.index,
        isRunning: action.isRunning,
        targetFound: action.targetFound,
      }
      
    default:
      return state;
  }
}

export default search;

