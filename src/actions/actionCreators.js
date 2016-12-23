import { randomlyGenerateArray } from '../helpers';

export function startBinarySearch(binaryTimeout, sequentialTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(sequentialTimeout);
  return {
    type: 'START_BINARY_SEARCH'
  }
}

export function startSequentialSearch(binaryTimeout, sequentialTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(sequentialTimeout);
  return {
    type: 'START_SEQUENTIAL_SEARCH'
  }
}

export function sequentialSearch(searchArray, searchNumber, low, high, iterations) {
  var testItem = iterations;
  iterations += 1;
  var isRunning = true;
  var targetFound = false;
  
  if (searchArray[testItem] !== searchNumber && isRunning) {
    low ++;
    testItem ++
  } else {
    var target = testItem;
    high = testItem;
    targetFound = true;
    isRunning = false
  }
  return {
    type: 'SEQUENTIAL_SEARCH',
    searchArray: searchArray,
    searchNumber: searchNumber,
    low: low,
    high: high,
    testItem: testItem,
    index: testItem,
    iterations: iterations,
    isRunning: isRunning,
    targetFound: targetFound,
    target: target
  }
}


export function binarySearch(searchArray, searchNumber, low, high, iterations) {

    iterations += 1;
    var isRunning = true;
    var targetFound = false;

    var mid = Math.floor((low + high) / 2);

    var testItem = mid;

    if (searchArray[testItem] !== searchNumber && isRunning) {
      searchNumber < searchArray[testItem] ? high = mid : low = mid;
      mid = Math.floor((low + high) / 2);
      testItem = mid;

    } else {
      testItem = mid;
      var target = mid;
      targetFound = true;
      isRunning = false;
    }
    return {
      type: 'BINARY_SEARCH',
      searchArray: searchArray,
      searchNumber: searchNumber,
      low: low,
      high: high,
      mid: mid,
      testItem: testItem,
      index: mid,
      iterations: iterations,
      isRunning: isRunning,
      targetFound: targetFound,
      target: target
    }
}

export function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}






