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
          destinationIndex = mergeArrayRight1.indexOf(-1);
          array1 = mergeArrayRight2.filter(number => number > -1);
          array2 = mergeArrayRight3.filter(number => number > -1);
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
            finalArray = array1.concat(array2);
            for (i = 0; i < finalArray.length; i++) {
              mergeArrayRight1[destinationIndex] = finalArray[i];
              destinationIndex += 1;
            }
            mergeArrayRight2.fill(-1);
            mergeArrayRight3.fill(-1);
            mergePrior = 1;
            mergePriorSorted = true;
          }
      } else if (mergePrior === 1 && mergePriorSorted === true) {
          mergeFinalSort = true;
          destinationIndex = mergeArrayMain.indexOf(-1);
          array1 = mergeArrayLeft1.filter(number => number > -1);
          array2 = mergeArrayRight1.filter(number => number > -1);
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
            finalArray = array1.concat(array2);
            for (i = 0; i < finalArray.length; i++) {
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
