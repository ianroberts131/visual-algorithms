// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray } from '../helpers';
import { binarySearch } from '../data/algorithms';


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
  speed: "regular",
  regularActive: true,
  slowActive: false,
  fastActive: false,
  intervalSpeed: 1000,
  isRunning: false
}

function search(state = searchState, action) {
  switch(action.type) {
    case 'START_BINARY' :
      console.log("The low index is:", action.low);
      console.log("This high index is:", action.high);
      console.log("The middle index is:", action.mid);
      console.log("The target item is:", action.searchNumber);
      console.log("The current item is:", action.searchArray[action.testItem]);
      console.log("# of Iterations:", action.iterations);
      console.log("Is it running?", action.isRunning);
      console.log("Target Found?", action.targetFound);
      
      return {
        ...state,
        low: action.low,
        high: action.high,
        mid: action.mid,
        iterations: action.iterations,
        target: action.target,
        testItem: action.testItem,
        index: action.index,
        isRunning: action.isRunning,
        targetFound: action.targetFound
      }
      break;
      
    default:
      return state;
  }
}

export default search;

