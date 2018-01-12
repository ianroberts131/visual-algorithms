export function startDepthFirstSearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_DEPTH_FIRST_SEARCH'
  }
}

export function depthFirstSearch(searchArray, maxHeapSearchArray, testMaxHeapArray, stepIndex, searchNumber, low, high, iterations) {

    iterations += 1;
    var isRunning = true;
    var targetFound = false;
    var target = searchNumber;
    var index = 0;
    var testIndex = testMaxHeapArray[stepIndex];

    if ( searchArray[testIndex] === searchNumber ) {
      index = testIndex;
      targetFound = true;
      isRunning = false;
    } else {
      index = testIndex;
      searchArray[testIndex] = -1;
      stepIndex += 1;
    }

    return {
      type: 'DEPTH_FIRST_SEARCH',
      searchArray: searchArray,
      searchNumber: searchNumber,
      stepIndex: stepIndex,
      low: low,
      high: high,
      index: index,
      iterations: iterations,
      isRunning: isRunning,
      targetFound: targetFound,
      target: target
    }
}
