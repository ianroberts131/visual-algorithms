import { randomlyGenerateArray } from '../helpers';

export function startBinarySearch(binaryTimeout) {
  clearTimeout(binaryTimeout);
  return {
    type: 'START_BINARY_SEARCH',
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
      var target = mid;
      var targetFound = true;
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
      iterations: iterations,
      isRunning: isRunning,
      targetFound: targetFound,
      target: target
    }
}

// change speed
export function changeSpeed(speed) {
  console.log('changing the speed')
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}






