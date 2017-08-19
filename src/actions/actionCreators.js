export function startSelectionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_SELECTION_SORT'
  }
}

export function selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations, isSorted = false) {
  iterations += 1;
  var isRunning = true;
  var lowItem = sortArray[currentLow];
  if (currentlyChecking > sortArray.length - 1) {
    sortArray[currentLow] = sortArray[sortedGroupIndex];
    sortArray[sortedGroupIndex] = lowItem;
    sortedGroupIndex += 1;
    currentLow = sortedGroupIndex;
    currentlyChecking = sortedGroupIndex + 1;
  } else {
    if (sortArray[currentlyChecking] < lowItem) {
      currentLow = currentlyChecking;
      currentlyChecking += 1;
    } else {
      currentlyChecking += 1;
    }
  }
  if (sortedGroupIndex === sortArray.length - 1) {
    isRunning = false;
    isSorted = true;
  }
  return {
    type: 'SELECTION_SORT',
    sortArray: sortArray,
    sortedGroupIndex: sortedGroupIndex,
    currentlyChecking: currentlyChecking,
    currentLow: currentLow,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted
  }
}

export function startInsertionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_INSERTION_SORT'
  }
}

export function insertionSort(sortArray, index, key, currentlyChecking, iterations, isSorted = false) {
  iterations += 1;
  var isRunning = true;
  if (index > sortArray.length - 1) {
    isRunning = false;
    isSorted = true;
  } else if ((currentlyChecking >= 0) && (sortArray[currentlyChecking] > key)) {
      sortArray[currentlyChecking + 1] = sortArray[currentlyChecking];
      currentlyChecking -= 1;
  } else {
    sortArray[currentlyChecking + 1] = key;
    index += 1;
    currentlyChecking = index - 1;
    key = sortArray[index];
  }

  return {
    type: 'INSERTION_SORT',
    sortArray: sortArray,
    insertionIndex: index,
    insertionKey: key,
    currentlyChecking: currentlyChecking,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted
  }
}

export function startBinarySearch(binaryTimeout, linearTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  return {
    type: 'START_BINARY_SEARCH'
  }
}

export function startLinearSearch(binaryTimeout, linearTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
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

export function changeSpeed(speed, ...timeouts) {
  // unkown number of timeouts cleared, since different for search/sort algorithm pages
  // pass timeouts spread, then iterate over each and clear
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}
