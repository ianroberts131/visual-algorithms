export function startInsertionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_INSERTION_SORT'
  }
}

export function insertionSort(sortArray, index, key, currentlyChecking, iterations, isSorted = false, slideRight = false, verticalSlide = false) {
  var isRunning = true;
  var replacedIndex = 0;

  if (index > sortArray.length - 1) {
    isRunning = false;
    isSorted = true;
  } else if ((currentlyChecking >= 0) && (sortArray[currentlyChecking] > key)) {
      iterations += 1;
      sortArray[currentlyChecking + 1] = sortArray[currentlyChecking];
      currentlyChecking -= 1;
      slideRight = true;
  } else {
      iterations += 1;
      replacedIndex = currentlyChecking + 1;
      sortArray[currentlyChecking + 1] = key;
      index += 1;
      currentlyChecking = index - 1;
      key = sortArray[index];
      verticalSlide = true;
  }

  return {
    type: 'INSERTION_SORT',
    sortArray: sortArray,
    insertionIndex: index,
    insertionKey: key,
    currentlyChecking: currentlyChecking,
    insertionSlideRight: slideRight,
    insertionVerticalSlide: verticalSlide,
    insertionReplacedIndex: replacedIndex,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted
  }
}
