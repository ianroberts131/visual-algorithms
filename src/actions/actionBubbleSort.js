export function startBubbleSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_BUBBLE_SORT'
  }
}

export function bubbleSort(sortArray, bubbleSwapsCounter, bubbleIndex, iterations, isSorted = false, bubbleSwapping = false) {
  var isRunning = true;
  if (bubbleIndex === sortArray.length - 1) {
    if (bubbleSwapsCounter === 0) {
      isRunning = false;
      isSorted = true;
    } else {
      bubbleIndex = 0;
      bubbleSwapsCounter = 0;
    }
  } else {
    iterations += 1;
    if (sortArray[bubbleIndex] > sortArray[bubbleIndex + 1]) {
      var temp = sortArray[bubbleIndex];
      sortArray[bubbleIndex] = sortArray[bubbleIndex + 1];
      sortArray[bubbleIndex + 1] = temp;
      bubbleSwapsCounter += 1;
      bubbleSwapping = true;
    }
    bubbleIndex += 1;
  }

  return {
    type: 'BUBBLE_SORT',
    sortArray: sortArray,
    bubbleSwapsCounter: bubbleSwapsCounter,
    bubbleIndex: bubbleIndex,
    bubbleSwapping: bubbleSwapping,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted
  }
}
