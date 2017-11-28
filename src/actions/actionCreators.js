export function searchBaseState() {
  return {
    type: 'SEARCH_BASE_STATE'
  }
}

export function sortBaseState() {
  return {
    type: 'SORT_BASE_STATE'
  }
}

export function togglePlayPause(isRunning, paused) {
  return {
    type: 'TOGGLE_PLAY_PAUSE',
    isRunning: isRunning,
    paused: paused
  }
}

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

export function startMergeSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_MERGE_SORT'
  }
}

export function mergeSort(mergeArray, mergePrior, mergePriorSorted, mergeArrayMain, mergeArrayLeft1, mergeArrayLeft2, mergeArrayLeft3, mergeArrayLeft4, mergeArrayLeft5, mergeArrayLeft6, mergeArrayLeft7, mergeArrayRight1, mergeArrayRight2, mergeArrayRight3, mergeArrayRight4, mergeArrayRight5, mergeArrayRight6, mergeArrayRight7,  iterations, isSorted = false) {
  iterations += 1;
  var isRunning = true;
  var mergeFinalSort = false;
  // Split the main array into 2 separate arrays, creating tier 2
  if (mergePrior === 0 && mergePriorSorted === false) {
      mergeArrayLeft1 = mergeArrayMain.slice(0,4);
      mergeArrayRight1 = mergeArrayMain.slice(4);
      mergeArrayMain = [-1, -1, -1, -1, -1, -1, -1, -1];
      mergePrior = 1;
  // Split the left half into 2 separate arrays, creating the left side of tier 3
} else if (mergePrior === 1 && mergePriorSorted === false) {
      mergeArrayLeft2 = mergeArrayLeft1.slice(0,2);
      mergeArrayLeft3 = mergeArrayLeft1.slice(2,4);
      mergeArrayLeft1 = [-1, -1, -1, -1];
      mergePrior = 3;
  // Split the left side of the left half tier 3 into 2 individual items
  } else if (mergePrior === 3 && mergePriorSorted === false) {
      mergeArrayLeft4 = mergeArrayLeft2[0];
      mergeArrayLeft5 = mergeArrayLeft2[1];
      mergeArrayLeft2 = [-1, -1];
      mergePrior = 5;
  // Move the 2 individual items to mergeArrayLeft2 until it's sorted
  } else if (mergePrior === 5 && mergePriorSorted === false) {
    if (mergeArrayLeft2[0] === -1) {
      if (mergeArrayLeft4 < mergeArrayLeft5) {
        mergeArrayLeft2[0] = mergeArrayLeft4;
        mergeArrayLeft4 = -1;
      } else {
        mergeArrayLeft2[0] = mergeArrayLeft5;
        mergeArrayLeft5 = -1;
      }
    } else {
      mergeArrayLeft2[1] = mergeArrayLeft4 === -1 ? mergeArrayLeft5 : mergeArrayLeft4;
      mergeArrayLeft4 = -1;
      mergeArrayLeft5 = -1;
      mergePrior = 4;
    }
  // Split the right side of the left half tier 3 into 2 individual items
  } else if (mergePrior === 4 && mergePriorSorted === false) {
      mergeArrayLeft6 = mergeArrayLeft3[0];
      mergeArrayLeft7 = mergeArrayLeft3[1];
      mergeArrayLeft3 = [-1, -1];
      mergePrior = 6;
  // Move the 2 individual items to mergeArrayLeft3 until it's sorted
  } else if (mergePrior === 6 && mergePriorSorted === false) {
      if (mergeArrayLeft3[0] === -1) {
        if (mergeArrayLeft6 < mergeArrayLeft7) {
          mergeArrayLeft3[0] = mergeArrayLeft6;
          mergeArrayLeft6 = -1;
        } else {
          mergeArrayLeft3[0] = mergeArrayLeft7;
          mergeArrayLeft7 = -1;
        }
      } else {
        mergeArrayLeft3[1] = mergeArrayLeft6 === -1 ? mergeArrayLeft7 : mergeArrayLeft6;
        mergeArrayLeft6 = -1;
        mergeArrayLeft7 = -1;
        mergePrior = 3;
        mergePriorSorted = true;
      }
  // Go through mergeArrayLeft2 & mergeArrayLeft3 and move items to
  // mergeArrayLeft1, in order, until 1 of the arrays is empty
  } else if (mergePrior === 3 && mergePriorSorted === true) {
      var min;
      var index;
      var destinationIndex = mergeArrayLeft1.indexOf(-1);
      var array1 = mergeArrayLeft2.filter(number => number > -1);
      var array2 = mergeArrayLeft3.filter(number => number > -1);
      if (array1.length > 0 && array2.length > 0) {
          if (array1[0] < array2[0]) {
            min = array1[0];
            index = mergeArrayLeft2.indexOf(min);
            mergeArrayLeft2[index] = -1;
          } else {
            min = array2[0];
            index = mergeArrayLeft3.indexOf(min);
            mergeArrayLeft3[index] = -1;
          }
          mergeArrayLeft1[destinationIndex] = min;
      } else {
        var finalArray = array1.concat(array2);
        for (var i = 0; i < finalArray.length; i++) {
          mergeArrayLeft1[destinationIndex] = finalArray[i];
          destinationIndex += 1;
        }
        mergeArrayLeft2.fill(-1);
        mergeArrayLeft3.fill(-1);
        mergePrior = 2;
        mergePriorSorted = false;
      }
      // Split the right half into 2 separate arrays, creating the right side of tier 3
    } else if (mergePrior === 2 && mergePriorSorted === false) {
          mergeArrayRight2 = mergeArrayRight1.slice(0,2);
          mergeArrayRight3 = mergeArrayRight1.slice(2,4);
          mergeArrayRight1 = [-1, -1, -1, -1];
          mergePrior = 7;
      // Split the left side of the right half tier 3 into 2 individual items
    } else if (mergePrior === 7 && mergePriorSorted === false) {
          mergeArrayRight4 = mergeArrayRight2[0];
          mergeArrayRight5 = mergeArrayRight2[1];
          mergeArrayRight2 = [-1, -1];
          mergePrior = 8;
      // Move the 2 individual items to mergeArrayRight2 until it's sorted
    } else if (mergePrior === 8 && mergePriorSorted === false) {
        if (mergeArrayRight2[0] === -1) {
          if (mergeArrayRight4 < mergeArrayRight5) {
            mergeArrayRight2[0] = mergeArrayRight4;
            mergeArrayRight4 = -1;
          } else {
            mergeArrayRight2[0] = mergeArrayRight5;
            mergeArrayRight5 = -1;
          }
        } else {
          mergeArrayRight2[1] = mergeArrayRight4 === -1 ? mergeArrayRight5 : mergeArrayRight4;
          mergeArrayRight4 = -1;
          mergeArrayRight5 = -1;
          mergePrior = 9;
        }
      // Split the right side of the right half tier 3 into 2 individual items
    } else if (mergePrior === 9 && mergePriorSorted === false) {
          mergeArrayRight6 = mergeArrayRight3[0];
          mergeArrayRight7 = mergeArrayRight3[1];
          mergeArrayRight3 = [-1, -1];
          mergePrior = 10;
      // Move the 2 individual items to mergeArrayLeft3 until it's sorted
    } else if (mergePrior === 10 && mergePriorSorted === false) {
          if (mergeArrayRight3[0] === -1) {
            if (mergeArrayRight6 < mergeArrayRight7) {
              mergeArrayRight3[0] = mergeArrayRight6;
              mergeArrayRight6 = -1;
            } else {
              mergeArrayRight3[0] = mergeArrayRight7;
              mergeArrayRight7 = -1;
            }
          } else {
            mergeArrayRight3[1] = mergeArrayRight6 === -1 ? mergeArrayRight7 : mergeArrayRight6;
            mergeArrayRight6 = -1;
            mergeArrayRight7 = -1;
            mergePrior = 7;
            mergePriorSorted = true;
          }
      // Go through mergeArrayRight2 & mergeArrayRight3 and move items to
      // mergeArrayRight1, in order, until 1 of the arrays is empty
    } else if (mergePrior === 7 && mergePriorSorted === true) {
          var min;
          var index;
          var destinationIndex = mergeArrayRight1.indexOf(-1);
          var array1 = mergeArrayRight2.filter(number => number > -1);
          var array2 = mergeArrayRight3.filter(number => number > -1);
          if (array1.length > 0 && array2.length > 0) {
              if (array1[0] < array2[0]) {
                min = array1[0];
                index = mergeArrayRight2.indexOf(min);
                mergeArrayRight2[index] = -1;
              } else {
                min = array2[0];
                index = mergeArrayRight3.indexOf(min);
                mergeArrayRight3[index] = -1;
              }
              mergeArrayRight1[destinationIndex] = min;
          } else {
            var finalArray = array1.concat(array2);
            for (var i = 0; i < finalArray.length; i++) {
              mergeArrayRight1[destinationIndex] = finalArray[i];
              destinationIndex += 1;
            }
            mergeArrayRight2.fill(-1);
            mergeArrayRight3.fill(-1);
            mergePrior = 1;
            mergePriorSorted = true;
          }
      } else if (mergePrior === 1 && mergePriorSorted === true) {
          var min;
          var index;
          mergeFinalSort = true;
          var destinationIndex = mergeArrayMain.indexOf(-1);
          var array1 = mergeArrayLeft1.filter(number => number > -1);
          var array2 = mergeArrayRight1.filter(number => number > -1);
          if (array1.length > 0 && array2.length > 0) {
            if (array1[0] < array2[0]) {
              min = array1[0];
              index = mergeArrayLeft1.indexOf(min);
              mergeArrayLeft1[index] = -1;
            } else {
              min = array2[0];
              index = mergeArrayRight1.indexOf(min);
              mergeArrayRight1[index] = -1
            }
            mergeArrayMain[destinationIndex] = min;
          } else {
            var finalArray = array1.concat(array2);
            for (var i = 0; i < finalArray.length; i++) {
              mergeArrayMain[destinationIndex] = finalArray[i];
              destinationIndex += 1
            }
            mergeArrayLeft1.fill(-1);
            mergeArrayRight1.fill(-1);
            isSorted = true;
            isRunning = false;
          }
      }
  return {
    type: 'MERGE_SORT',
    mergeArray: mergeArray,
    mergeArrayMain: mergeArrayMain,
    mergeArrayLeft1: mergeArrayLeft1,
    mergeArrayLeft2: mergeArrayLeft2,
    mergeArrayLeft3: mergeArrayLeft3,
    mergeArrayLeft4: mergeArrayLeft4,
    mergeArrayLeft5: mergeArrayLeft5,
    mergeArrayLeft6: mergeArrayLeft6,
    mergeArrayLeft7: mergeArrayLeft7,
    mergeArrayRight1: mergeArrayRight1,
    mergeArrayRight2: mergeArrayRight2,
    mergeArrayRight3: mergeArrayRight3,
    mergeArrayRight4: mergeArrayRight4,
    mergeArrayRight5: mergeArrayRight5,
    mergeArrayRight6: mergeArrayRight6,
    mergeArrayRight7: mergeArrayRight7,
    mergePrior: mergePrior,
    mergePriorSorted: mergePriorSorted,
    iterations: iterations,
    isRunning: isRunning,
    isSorted: isSorted,
    mergeFinalSort: mergeFinalSort
  }
}

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

        if (quickHighIndex != currentlyChecking) {
          quickSwapping = true;
          quickSwappedIndices = [quickHighIndex, currentlyChecking];
        }

        quickHighIndex += 1;
      }
      currentlyChecking += 1
    } else {
      quickPriorPivots.push(sortArray[quickPivotIndex]);
      // First, swap the pivot with the high index
      var temp = sortArray[quickHighIndex];
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

export function startBinarySearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_BINARY_SEARCH'
  }
}

export function startLinearSearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_LINEAR_SEARCH'
  }
}

export function startBreadthFirstSearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_BREADTH_FIRST_SEARCH'
  }
}

export function startDepthFirstSearch(binaryTimeout, linearTimeout, breadthFirstTimeout, depthFirstTimeout) {
  clearTimeout(binaryTimeout);
  clearTimeout(linearTimeout);
  clearTimeout(breadthFirstTimeout);
  clearTimeout(depthFirstTimeout);
  return {
    type: 'START_DEPTH_FIRST_SEARCH'
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

export function breadthFirstSearch(searchArray, maxHeapSearchArray, testMaxHeapArray, stepIndex, searchNumber, low, high, iterations) {

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
      type: 'BREADTH_FIRST_SEARCH',
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
