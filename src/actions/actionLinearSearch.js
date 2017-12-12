export function startLinearSearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_LINEAR_SEARCH'
  }
}

export function linearSearch(searchArray, searchNumber, low, high, iterations) {
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
    type: 'LINEAR_SEARCH',
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
