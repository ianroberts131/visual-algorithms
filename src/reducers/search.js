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

//function binarySearch() {
//  binaryTimeout = setTimeout(() => {
//    low = this.state.low;
//    high = this.state.high;
//    iterations ++;
//    mid = Math.floor((low + high) / 2);
//    this.setState({ 
//      low: low,
//      high: high,
//      target: mid,
//      testItem: mid,
//      index: mid,
//      iterations: iterations
//    });
//
//    if (searchArray[this.state.testItem] !== this.state.searchNumber && this.state.isRunning === true) {
//      if (this.state.searchNumber < searchArray[this.state.testItem]) {
//          high = mid;
//      } else {
//          low = mid;
//      }
//      mid = Math.floor((low + high) / 2);
//      this.setState({ high: high, low: low, testItem: mid });
//      this.binarySearch();
//    } else {
//      this.setState({ target: mid, targetFound: true, isRunning: false});
//    }
//  }, this.state.intervalSpeed);
//
//}

function search(state = searchState, action) {
  switch(action.type) {
    case 'START_BINARY' :
      return {
        ...state,
        low: action.low,
        high: action.high,
        iterations: action.iterations,
        target: action.target,
        testItem: action.testItem,
        index: action.index
      }
      
    default:
      return state;
  }
}

export default search;

