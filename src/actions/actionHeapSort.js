import { step2HeapSort, step3HeapSort } from '../helpers';

export function startHeapSort(...timeouts) {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'START_HEAP_SORT',
  }
}

export function heapSort(sortArray, heapSortArray, step2HeapSortArray, step3HeapSortArray, iterations, heapTreeTop, heapTreeRow2, heapTreeRow3, heapTreeRow4, heapSortStep, smallHeapSortStep, heapArrayIndex, startHeapTree, finishBuildHeap, isSorted = false) {
  iterations += 1;
  var isRunning = true;
  var heapFinalSort = false;

  // build the heap tree from orginal ramdom array
  if ( startHeapTree === true ) {
    var viewedNumber = 0;
    viewedNumber = heapSortArray[heapSortStep];
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[0] = viewedNumber;
      }
      if ( smallHeapSortStep === 2 ) {
        if ( heapSortStep === 0 ) heapTreeTop[5] = viewedNumber;
        if ( heapSortStep === 1 ) heapTreeRow2[2] = viewedNumber;
        if ( heapSortStep === 2 ) heapTreeRow2[8] = viewedNumber;
        if ( heapSortStep === 3 ) heapTreeRow3[1] = viewedNumber;
        if ( heapSortStep === 4 ) heapTreeRow3[3] = viewedNumber;
        if ( heapSortStep === 5 ) heapTreeRow3[7] = viewedNumber;
        if ( heapSortStep === 6 ) heapTreeRow3[9] = viewedNumber;
        if ( heapSortStep === 7 ) heapTreeRow4[0] = viewedNumber;
        if ( heapSortStep === 8 ) heapTreeRow4[1] = viewedNumber;
        if( heapSortStep === 9 ) heapTreeRow4[3] = viewedNumber;
      }
      if ( smallHeapSortStep === 3 ) {
        heapTreeTop[0] = -1;
        heapSortArray[heapSortStep] = -1;
      }
      smallHeapSortStep += 1;
      if ( smallHeapSortStep === 4 ) {
        smallHeapSortStep = 1;
        heapSortStep += 1;
        if (heapSortStep > 9) {
            startHeapTree = false;
           heapSortStep = 0;
           var  step2Array = [ heapTreeTop[5], heapTreeRow2[2], heapTreeRow2[8], heapTreeRow3[1], heapTreeRow3[3], heapTreeRow3[7], heapTreeRow3[9], heapTreeRow4[0], heapTreeRow4[1], heapTreeRow4[3] ]
           var step2HeapSortArray = step2HeapSort(step2Array);
           heapSortArray = step2HeapSortArray;
        }
      }
  }
  // sort the heap tree itself
  if ( startHeapTree === false && finishBuildHeap === false ) {
    var viewedNumber = 0;
    viewedNumber = step2HeapSortArray[heapSortStep];
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[9] = viewedNumber;
      }
      if ( smallHeapSortStep === 2 ) {
        if ( heapSortStep === 0 ) heapTreeTop[5] = viewedNumber;
        if ( heapSortStep === 1 ) heapTreeRow2[2] = viewedNumber;
        if ( heapSortStep === 2 ) heapTreeRow2[8] = viewedNumber;
        if ( heapSortStep === 3 ) heapTreeRow3[1] = viewedNumber;
        if ( heapSortStep === 4 ) heapTreeRow3[3] = viewedNumber;
        if ( heapSortStep === 5 ) heapTreeRow3[7] = viewedNumber;
        if ( heapSortStep === 6 ) heapTreeRow3[9] = viewedNumber;
        if ( heapSortStep === 7 ) heapTreeRow4[0] = viewedNumber;
        if ( heapSortStep === 8 ) heapTreeRow4[1] = viewedNumber;
        if ( heapSortStep === 9 ) heapTreeRow4[3] = viewedNumber;
      }
      if ( smallHeapSortStep === 3 ) {
        heapTreeTop[9] = -1;
        heapSortArray[heapSortStep] = -1;
      }
      smallHeapSortStep += 1;
      if ( smallHeapSortStep === 4 ) {
        smallHeapSortStep = 1;
        heapSortStep += 1;
        if (heapSortStep > 9) {
          startHeapTree = false;
          finishBuildHeap = true;
          heapSortStep = 0;
          var  step3Array = [ heapTreeTop[5], heapTreeRow2[2], heapTreeRow2[8], heapTreeRow3[1], heapTreeRow3[3], heapTreeRow3[7], heapTreeRow3[9], heapTreeRow4[0], heapTreeRow4[1], heapTreeRow4[3] ]
          var step3HeapSortArray = step3HeapSort(step3Array);
        }
      }
   }

   // Final sort from heap back to a sorted array low to high - left to right
   if ( startHeapTree === false && finishBuildHeap === true && isSorted === false ) {
     var temp = 0;
     if ( heapSortStep === 0 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeTop[5];
        heapTreeTop[5] = -1;
        smallHeapSortStep += 1;
      } else if ( smallHeapSortStep === 2 ) {
        heapSortArray[9] = heapTreeTop[2];
        smallHeapSortStep += 1;
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
      }
    }

    if ( heapSortStep === 1 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow2[8];
        heapTreeRow2[8] = -1;
        smallHeapSortStep += 1;
      } else if ( smallHeapSortStep === 2 ) {
        heapSortArray[8] = heapTreeTop[2];
        smallHeapSortStep += 1;
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
      }
    }

    if ( heapSortStep === 2 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow2[2];
        heapTreeRow2[2] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 3 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow3[1];
        heapTreeRow3[1] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 4 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow3[3];
        heapTreeRow3[3] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 5 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow3[7];
        heapTreeRow3[7] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 6 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow3[9];
        heapTreeRow3[9] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 7 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow4[0];
        heapTreeRow4[0] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 8 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow4[1];
        heapTreeRow4[1] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 9 ) {
      if ( smallHeapSortStep === 1 ) {
        heapTreeTop[2] = heapTreeRow4[3];
        heapTreeRow4[3] = -1;
        smallHeapSortStep += 1;
        heapArrayIndex = ( 9 - heapSortStep );
      } else if ( smallHeapSortStep === 2 ) {
        if ( heapSortArray[heapArrayIndex] === -1 ) heapArrayIndex += 1;
        if ( heapSortArray[heapArrayIndex] > heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapTreeTop[2];
          smallHeapSortStep += 1;
        }
        if ( heapSortArray[heapArrayIndex] < heapTreeTop[2] ) {
          heapSortArray[heapArrayIndex - 1] = heapSortArray[heapArrayIndex];
          heapSortArray[heapArrayIndex] = -1;
          heapArrayIndex += 1;
        }
      } else {
        heapTreeTop[2] = -1;
        heapSortStep += 1;
        smallHeapSortStep = 1;
        heapArrayIndex = 0;
      }
    }

    if ( heapSortStep === 10 ) {
      isSorted = true;
      heapFinalSort = true;
      heapSortStep += 1;
    }

    if ( heapSortStep === 11 ) {
      isRunning = false;
    }
  }

  return {
    type: 'HEAP_SORT',
    sortArray: sortArray,
    heapSortArray: heapSortArray,
    step2HeapSortArray: step2HeapSortArray,
    step3HeapSortArray: step3HeapSortArray,
    heapFinalSort: heapFinalSort,
    heapTreeTop: heapTreeTop,
    heapTreeRow2: heapTreeRow2,
    heapTreeRow3: heapTreeRow3,
    heapTreeRow4: heapTreeRow4,
    heapSortStep: heapSortStep,
    smallHeapSortStep: smallHeapSortStep,
    heapArrayIndex: heapArrayIndex,
    finishBuildHeap: finishBuildHeap,
    iterations: iterations,
    startHeapTree: startHeapTree,
    isRunning: isRunning,
    isSorted: isSorted
  }
}
