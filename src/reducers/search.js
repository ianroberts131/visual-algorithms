// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray, buildMaxHeap, setUpHeapSearchArray, setUpTestMaxHeapArray, setUpDepthFirstTestMaxHeapArray, stepIndex } from '../helpers';
import { binarySearch, linearSearch, breadthFirstSearch, depthFirstSearch } from '../data/algorithms';

// create an array for the grid
var searchArray = randomlyGenerateArray(225, 999);
var heapSearchArray = randomlyGenerateArray(26, 500, false);
var maxHeapSearchArray = buildMaxHeap(heapSearchArray);

// create a search object, which will house all the state data within the search algorithms page
const searchState = {
  searchArray: searchArray,
  maxHeapSearchArray: maxHeapSearchArray,
  searchAlgorithm: binarySearch,
  index: "",
  low: 0,
  high: searchArray.length - 1,
  testItem: "",
  target: "",
  targetFound: false,
  iterations: 0,
  searchNumber: searchArray[Math.floor((Math.random() * 225) + 1)],
  maxHeapSearchNumber: maxHeapSearchArray[Math.floor((Math.random() * 26) + 1)],
  isRunning: false,
  paused: false
}

function search(state = searchState, action) {
  var newSearchArray = randomlyGenerateArray(225, 999);
  var heapSearchArray = randomlyGenerateArray(24, 500, false);
  var maxHeapSearchArray = buildMaxHeap(heapSearchArray);
  var newSearchNumber = newSearchArray[Math.floor((Math.random() * 225 ) + 1)];
  var maxHeapSearchNumber = maxHeapSearchArray[Math.floor((Math.random() * 24) + 1)];

  switch(action.type) {
    case 'SEARCH_BASE_STATE' :
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
        searchNumber: searchArray[Math.floor((Math.random() * 225) + 1)],
        isRunning: false,
        paused: false
      }

    case 'TOGGLE_PLAY_PAUSE' :
      return {
        ...state,
        isRunning: action.isRunning,
        paused: action.paused
      }

    case 'START_BINARY_SEARCH' :
      return {
        ...state,
        searchArray: newSearchArray,
        searchAlgorithm: binarySearch,
        index: "",
        low: 0,
        high: searchArray.length - 1,
        testItem: "",
        target: "",
        targetFound: false,
        iterations: 0,
        searchNumber: newSearchNumber,
        isRunning: true,
        paused: false
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

      case 'START_LINEAR_SEARCH' :
        return {
          ...state,
          searchArray: newSearchArray,
          searchAlgorithm: linearSearch,
          index: "",
          low: 0,
          high: searchArray.length - 1,
          testItem: "",
          target: "",
          targetFound: false,
          iterations: 0,
          searchNumber: newSearchNumber,
          isRunning: true,
          paused: false
        }

    case 'LINEAR_SEARCH' :
      return {
        ...state,
        searchAlgorithm: linearSearch,
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

    case 'START_BREADTH_FIRST_SEARCH' :
      var maxHeapSearchArray = buildMaxHeap(heapSearchArray);
      var maxHeapSearchNumber = maxHeapSearchArray[Math.floor((Math.random() * 24) + 1)];
      return {
        ...state,
        searchArray: setUpHeapSearchArray(searchArray, maxHeapSearchArray),
        maxHeapSearchArray: maxHeapSearchArray,
        testMaxHeapArray: setUpTestMaxHeapArray(),
        stepIndex: 0,
        searchAlgorithm: breadthFirstSearch,
        index: "",
        low: 6,
        high: 84,
        testItem: "",
        target: "",
        targetFound: false,
        iterations: 0,
        searchNumber: maxHeapSearchNumber,
        isRunning: true,
        paused: false
      }

    case 'BREADTH_FIRST_SEARCH' :
      return {
        ...state,
        searchArray: action.searchArray,
        searchAlgorithm: breadthFirstSearch,
        stepIndex: action.stepIndex,
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

    case 'START_DEPTH_FIRST_SEARCH' :
      var maxHeapSearchArray = buildMaxHeap(heapSearchArray);
      var maxHeapSearchNumber = maxHeapSearchArray[Math.floor((Math.random() * 24) + 1)];
        return {
          ...state,
          searchArray: setUpHeapSearchArray(searchArray, maxHeapSearchArray),
          maxHeapSearchArray: maxHeapSearchArray,
          testMaxHeapArray: setUpDepthFirstTestMaxHeapArray(),
          stepIndex: 0,
          searchAlgorithm: depthFirstSearch,
          index: "",
          low: 6,
          high: 84,
          testItem: "",
          target: "",
          targetFound: false,
          iterations: 0,
          searchNumber: maxHeapSearchNumber,
          isRunning: true,
          paused: false
        }

    case 'DEPTH_FIRST_SEARCH' :
      return {
        ...state,
        searchArray: action.searchArray,
        searchAlgorithm: depthFirstSearch,
        stepIndex: action.stepIndex,
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
