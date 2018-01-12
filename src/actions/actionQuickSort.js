export function startQuickSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_QUICK_SORT'
  }
}

export function quickSort(sortArray, currentlyChecking, quickPivotIndex, quickLowIndex, quickHighIndex, quickPairsToSort, quickPriorPivots, iterations, stopQuickSort, isSorted = false, quickSwapping = false, quickSwappedIndices = []) {
  var isRunning = true;
  if (stopQuickSort === true) {
    isRunning = false;
    isSorted = true;
  } else {
    iterations += 1;
    if (currentlyChecking < quickPivotIndex) {
      if (sortArray[currentlyChecking] <= sortArray[quickPivotIndex]) {
        var temp = sortArray[quickHighIndex];
        sortArray[quickHighIndex] = sortArray[currentlyChecking];
        sortArray[currentlyChecking] = temp;

        if (quickHighIndex !== currentlyChecking) {
          quickSwapping = true;
          quickSwappedIndices = [quickHighIndex, currentlyChecking];
        }

        quickHighIndex += 1;
      }
      currentlyChecking += 1
    } else {
      quickPriorPivots.push(sortArray[quickPivotIndex]);
      // First, swap the pivot with the high index
      temp = sortArray[quickHighIndex];
      sortArray[quickHighIndex] = sortArray[quickPivotIndex];
      sortArray[quickPivotIndex] = temp;
      quickSwapping = true;
      quickSwappedIndices = [quickHighIndex, quickPivotIndex];
      // If the 'right side' has more than 1 element, add it to future arrays to sort
      if (quickPivotIndex - quickHighIndex > 1) {
        quickPairsToSort.unshift([quickHighIndex + 1, quickPivotIndex]);
      }
      // If the 'left side' has more than 1 element, add it to future arrays to sort
      if (quickHighIndex - quickLowIndex > 1) {
        quickPairsToSort.unshift([quickLowIndex, quickHighIndex - 1]);
      }
      if (quickPairsToSort.length === 0) {
        stopQuickSort = true;
      } else {
        var newPair = quickPairsToSort.shift();
        quickLowIndex = newPair[0];
        quickHighIndex = newPair[0];
        currentlyChecking = newPair[0];
        quickPivotIndex = newPair[1];
      }
    }
  }

  return {
    type: 'QUICK_SORT',
    sortArray: sortArray,
    currentlyChecking: currentlyChecking,
    quickPivotIndex: quickPivotIndex,
    quickLowIndex: quickLowIndex,
    quickHighIndex: quickHighIndex,
    quickPairsToSort: quickPairsToSort,
    quickPriorPivots: quickPriorPivots,
    quickSwapping: quickSwapping,
    quickSwappedIndices: quickSwappedIndices,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted,
    stopQuickSort: stopQuickSort
  }
}
