// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import { randomlyGenerateArray, firstHeapTree, buildMaxHeap } from '../helpers';
import { selectionSort, insertionSort, bubbleSort, mergeSort, quickSort, heapSort } from '../data/algorithms';

// create an array for the search area
var sortArray = randomlyGenerateArray(10, 100, false);
var mergeArray = randomlyGenerateArray(8, 100, false);
var heapSortArray = randomlyGenerateArray(10, 100, false);

const sortState = {
  sortArray: sortArray,
  sortAlgorithm: selectionSort,
  iterations: 0,
  sortedGroupIndex: 0,
  currentLow: 0,
  currentlyChecking: 0,
  selectionSwapping: false,
  insertionIndex: 1,
  insertionKey: sortArray[1],
  insertionSlideRight: false,
  insertionSlideUp: false,
  insertionSlideDown: false,
  bubbleSwapsCounter: 0,
  bubbleIndex: 0,
  bubbleSwapping: false,
  mergeArray: mergeArray,
  mergeArrayMain: mergeArray,
  mergeArrayLeft1: [],
  mergeArrayLeft2: [],
  mergeArrayLeft3: [],
  mergeArrayLeft4: [],
  mergeArrayLeft5: "",
  mergeArrayLeft6: "",
  mergeArrayLeft7: "",
  mergeArrayRight1: [],
  mergeArrayRight2: [],
  mergeArrayRight3: [],
  mergeArrayRight4: "",
  mergeArrayRight5: "",
  mergeArrayRight6: "",
  mergeArrayRight7: "",
  mergePrior: 0,
  mergePriorSorted: false,
  mergeFinalSort: false,
  quickPivotIndex: 9,
  quickLowIndex: 0,
  quickHighIndex: 0,
  quickPairsToSort: [],
  quickPriorPivots: [],
  quickSwapping: false,
  quickSwappedIndices: [],
  stopQuickSort: false,
  heapSortArray: heapSortArray,
  step2HeapSortArray: [],
  step3HeapSortArray: [],
  heapTreeTop: [],
  heapTreeRow2: [],
  heapTreeRow3: [],
  heapTreeRow4: [],
  heapSortStep: 0,
  smallHeapSortStep: 0,
  heapArrayIndex: 0,
  startHeapTree: true,
  finishBuildHeap: false,
  isRunning: false,
  isSorted: false,
  paused: false,
}

function sort(state = sortState, action) {
  switch(action.type) {
    case 'SORT_BASE_STATE' :
      return {
        ...state,
        sortArray: sortArray,
        sortAlgorithm: selectionSort,
        iterations: 0,
        sortedGroupIndex: 0,
        currentLow: 0,
        currentlyChecking: 0,
        selectionSwapping: false,
        insertionIndex: 1,
        insertionKey: sortArray[1],
        insertionSlideRight: false,
        insertionSlideUp: false,
        insertionSlideDown: false,
        bubbleSwapsCounter: 0,
        bubbleIndex: 0,
        bubbleSwapping: false,
        mergeArray: mergeArray,
        mergeArrayMain: mergeArray,
        mergeArrayLeft1: [],
        mergeArrayLeft2: [],
        mergeArrayLeft3: [],
        mergeArrayLeft4: "",
        mergeArrayLeft5: "",
        mergeArrayLeft6: "",
        mergeArrayLeft7: "",
        mergeArrayRight1: [],
        mergeArrayRight2: [],
        mergeArrayRight3: [],
        mergeArrayRight4: "",
        mergeArrayRight5: "",
        mergeArrayRight6: "",
        mergeArrayRight7: "",
        mergePrior: 0,
        mergePriorSorted: false,
        quickPivotIndex: 9,
        quickLowIndex: 0,
        quickHighIndex: 0,
        quickPairsToSort: [],
        quickPriorPivots: [],
        quickSwapping: false,
        quickSwappedIndices: [],
        heapSortArray: heapSortArray,
        step2HeapSortArray: [],
        step3HeapSortArray: [],
        heapTreeTop: [],
        heapTreeRow2: [],
        heapTreeRow3: [],
        heapTreeRow4: [],
        heapSortStep: 0,
        smallHeapSortStep: 0,
        heapArrayIndex: 0,
        startHeapTree: true,
        finishBuildHeap: false,
        isRunning: false,
        isSorted: false,
        paused: false
      }

    case 'TOGGLE_PLAY_PAUSE' :
      return {
        ...state,
        isRunning: action.isRunning,
        paused: action.paused
      }

    case 'START_SELECTION_SORT' :
      return {
        ...state,
        sortArray: randomlyGenerateArray(10, 100, false),
        sortAlgorithm: selectionSort,
        sortedGroupIndex: 0,
        currentLow: 0,
        currentlyChecking: 0,
        selectionSwapping: false,
        swappedElement: 0,
        isRunning: true,
        iterations: 0,
        isSorted: false,
        paused: false
      }

    case 'SELECTION_SORT' :
      return {
        ...state,
        sortAlgorithm: selectionSort,
        iterations: action.iterations,
        sortedGroupIndex: action.sortedGroupIndex,
        currentLow: action.currentLow,
        currentlyChecking: action.currentlyChecking,
        selectionSwapping: action.selectionSwapping,
        swappedElement: action.swappedElement,
        isRunning: action.isRunning,
        isSorted: action.isSorted
      }

    case 'START_INSERTION_SORT' :
      var insertionArray = randomlyGenerateArray(10, 100, false);
        return {
          ...state,
          sortArray: insertionArray,
          sortAlgorithm: insertionSort,
          currentlyChecking: 0,
          insertionIndex: 1,
          insertionKey: insertionArray[1],
          insertionSlideRight: false,
          insertionVerticalSlide: false,
          insertionReplacedIndex: 0,
          isRunning: true,
          iterations: 0,
          isSorted: false,
          paused: false
        }

    case 'INSERTION_SORT' :
      return {
        ...state,
        sortAlgorithm: insertionSort,
        iterations: action.iterations,
        currentlyChecking: action.currentlyChecking,
        insertionIndex: action.insertionIndex,
        insertionKey: action.insertionKey,
        insertionSlideRight: action.insertionSlideRight,
        insertionVerticalSlide: action.insertionVerticalSlide,
        insertionReplacedIndex: action.insertionReplacedIndex,
        isRunning: action.isRunning,
        isSorted: action.isSorted
      }

    case 'START_BUBBLE_SORT' :
      var bubbleArray = randomlyGenerateArray(10, 100, false);
        return {
          ...state,
          sortArray: bubbleArray,
          sortAlgorithm: bubbleSort,
          bubbleSwapsCounter: 0,
          bubbleIndex: 0,
          bubbleSwapping: false,
          isRunning: true,
          iterations: 0,
          isSorted: false,
          paused: false
        }

    case 'BUBBLE_SORT' :
      return {
        ...state,
        sortAlgorithm: bubbleSort,
        iterations: action.iterations,
        bubbleSwapsCounter: action.bubbleSwapsCounter,
        bubbleIndex: action.bubbleIndex,
        bubbleSwapping: action.bubbleSwapping,
        isRunning: action.isRunning,
        isSorted: action.isSorted
      }

    case 'START_MERGE_SORT' :
      var newMergeArray = randomlyGenerateArray(8, 100, false);
        return {
          ...state,
          sortArray: newMergeArray,
          mergeArrayMain: newMergeArray,
          mergeArrayLeft1: [-1, -1, -1, -1],
          mergeArrayLeft2: [-1, -1],
          mergeArrayLeft3: [-1, -1],
          mergeArrayLeft4: -1,
          mergeArrayLeft5: -1,
          mergeArrayLeft6: -1,
          mergeArrayLeft7: -1,
          mergeArrayRight1: [-1, -1, -1, -1],
          mergeArrayRight2: [-1, -1],
          mergeArrayRight3: [-1, -1],
          mergeArrayRight4: -1,
          mergeArrayRight5: -1,
          mergeArrayRight6: -1,
          mergeArrayRight7: -1,
          mergePrior: 0,
          mergePriorSorted: false,
          sortAlgorithm: mergeSort,
          isRunning: true,
          iterations: 0,
          isSorted: false,
          mergeFinalSort: false,
          paused: false
        }

    case 'MERGE_SORT' :
      return {
        ...state,
        sortAlgorithm: mergeSort,
        iterations: action.iterations,
        isRunning: action.isRunning,
        isSorted: action.isSorted,
        mergeArrayMain: action.mergeArrayMain,
        mergeArrayLeft1: action.mergeArrayLeft1,
        mergeArrayLeft2: action.mergeArrayLeft2,
        mergeArrayLeft3: action.mergeArrayLeft3,
        mergeArrayLeft4: action.mergeArrayLeft4,
        mergeArrayLeft5: action.mergeArrayLeft5,
        mergeArrayLeft6: action.mergeArrayLeft6,
        mergeArrayLeft7: action.mergeArrayLeft7,
        mergeArrayRight1: action.mergeArrayRight1,
        mergeArrayRight2: action.mergeArrayRight2,
        mergeArrayRight3: action.mergeArrayRight3,
        mergeArrayRight4: action.mergeArrayRight4,
        mergeArrayRight5: action.mergeArrayRight5,
        mergeArrayRight6: action.mergeArrayRight6,
        mergeArrayRight7: action.mergeArrayRight7,
        mergePrior: action.mergePrior,
        mergePriorSorted: action.mergePriorSorted,
        mergeFinalSort: action.mergeFinalSort
      }

    case 'START_QUICK_SORT' :
      var quickSortArray = randomlyGenerateArray(10, 100, false);
        return {
          ...state,
          sortArray: quickSortArray,
          sortAlgorithm: quickSort,
          currentlyChecking: 0,
          quickPivotIndex: 9,
          quickLowIndex: 0,
          quickHighIndex: 0,
          quickPairsToSort: [],
          quickPriorPivots: [],
          quickSwapping: false,
          quickSwappedIndices: [],
          isRunning: true,
          iterations: 0,
          isSorted: false,
          stopQuickSort: false,
          paused: false
        }

    case 'QUICK_SORT' :
      return {
          ...state,
          sortAlgorithm: quickSort,
          currentlyChecking: action.currentlyChecking,
          quickPivotIndex: action.quickPivotIndex,
          quickLowIndex: action.quickLowIndex,
          quickHighIndex: action.quickHighIndex,
          quickPairsToSort: action.quickPairsToSort,
          quickPriorPivots: action.quickPriorPivots,
          quickSwapping: action.quickSwapping,
          quickSwappedIndices: action.quickSwappedIndices,
          iterations: action.iterations,
          isRunning: action.isRunning,
          isSorted: action.isSorted,
          stopQuickSort: action.stopQuickSort
      }

    case 'START_HEAP_SORT' :
      var newHeapArray = randomlyGenerateArray(10, 100, false);
      var holdHeapArray = newHeapArray;
        return {
          ...state,
          sortArray: newHeapArray,
          sortAlgorithm: heapSort,
          heapSortArray: newHeapArray,
          step2HeapSortArray: [],
          step3HeapSortArray: [],
          iterations: 0,
          heapTreeTop: [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
          heapTreeRow2: [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
          heapTreeRow3: [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
          heapTreeRow4: [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
          finishBuildHeap: false,
          startHeapTree: true,
          heapSortStep: 0,
          smallHeapSortStep: 0,
          heapArrayIndex: 0,
          isRunning: true,
          isSorted: false,
          paused: false
        }

    case 'HEAP_SORT' :
      return {
        ...state,
        sortAlgorithm: heapSort,
        heapSortArray: action.heapSortArray,
        step2HeapSortArray: action.step2HeapSortArray,
        iterations: action.iterations,
        heapTreeTop: action.heapTreeTop,
        heapTreeRow2: action.heapTreeRow2,
        heapTreeRow3: action.heapTreeRow3,
        heapTreeRow4: action.heapTreeRow4,
        heapSortStep: action.heapSortStep,
        smallHeapSortStep: action.smallHeapSortStep,
        heapArrayIndex: action.heapArrayIndex, 
        startHeapTree: action.startHeapTree,
        finishBuildHeap: action.finishBuildHeap,
        isRunning: action.isRunning,
        isSorted: action.isSorted
      }

    default:
      return state;
  }
}

export default sort;
