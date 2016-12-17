// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray } from '../helpers';
import { binarySearch } from '../data/algorithms';


// create an array for the grid
var searchArray = randomlyGenerateArray(400);

// create a grid object, which will house all the state data within the grid
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
  console.log("The search items are updating");
  console.log(state, action);
  return state;
}

export default search;