export function startSelectionSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_SELECTION_SORT'
  }
}

export function selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations, isSorted = false, selectionSwapping = false) {
  iterations += 1;
  var isRunning = true;
  var lowItem = sortArray[currentLow];
  var swappedElement;
  if (sortedGroupIndex === sortArray.length - 1) {
    isRunning = false;
    isSorted = true;
  }
  if (currentlyChecking > sortArray.length - 1) {
    // If the lowest element isn't currently in position, initiate the swap animation
    if (currentLow !== sortedGroupIndex) {
      selectionSwapping = true;
      swappedElement = currentLow;
    }
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
  return {
    type: 'SELECTION_SORT',
    sortArray: sortArray,
    sortedGroupIndex: sortedGroupIndex,
    currentlyChecking: currentlyChecking,
    currentLow: currentLow,
    selectionSwapping: selectionSwapping,
    swappedElement: swappedElement,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted
  }
}
