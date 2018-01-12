export function startBinarySearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_BINARY_SEARCH'
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
