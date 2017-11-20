import { randomlyGenerateArray } from '../helpers';
import { selectionSort, insertionSort, bubbleSort, mergeSort, quickSort } from '../data/algorithms';

import sortState from './sort';
import sort from './sort';


describe('sort reducer', () => {

  it('Should return SORT_BASE_STATE', () => {
    const state = sortState
    const action = {
    type: 'SORT_BASE_STATE'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      sortAlgorithm: { name: 'Selection Sort',
           url: 'selection-sort',
           description: 'An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Initially, the sorted sublist is empty. The algorithm proceeds to find the smallest element in the unsorted sublist, and swaps it with the leftmost unsorted element.',
           worstCase: 'O(n<sup>2</sup>)',
           bestCase: 'O(n<sup>2</sup>)',
           averageCase: 'O(n<sup>2</sup>)' },
      iterations: 0,
      sortedGroupIndex: 0,
      currentLow: 0,
      currentlyChecking: 0,
      selectionSwapping: false,
      insertionIndex: 1,
      insertionKey: results.sortArray[1],
      insertionSlideRight: false,
      insertionSlideUp: false,
      insertionSlideDown: false,
      bubbleSwapsCounter: 0,
      bubbleIndex: 0,
      bubbleSwapping: false,
      mergeArray: results.mergeArray,
      mergeArrayMain: results.mergeArray,
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
      isRunning: false,
      isSorted: false,
      paused: false
    });
  });

  it('Should return START_SELECTION_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_SELECTION_SORT'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      sortAlgorithm: { name: 'Selection Sort',
           url: 'selection-sort',
           description: 'An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Initially, the sorted sublist is empty. The algorithm proceeds to find the smallest element in the unsorted sublist, and swaps it with the leftmost unsorted element.',
           worstCase: 'O(n<sup>2</sup>)',
           bestCase: 'O(n<sup>2</sup>)',
           averageCase: 'O(n<sup>2</sup>)' },
      sortedGroupIndex: 0,
      currentLow: 0,
      currentlyChecking: 0,
      selectionSwapping: false,
      swappedElement: 0,
      isRunning: true,
      iterations: 0,
      isSorted: false,
      paused: false
    });
  });

  it('Should return SELECTION_SORT', () => {
  const state = sortState
  const action = {
  type: 'START_SELECTION_SORT'
  }
  const results = sort(state, action)
  const state2 = results
  const action2 = {
  type: 'SELECTION_SORT'
  }
  const results2 = sort(state2, action2)

  expect(results2).toEqual({
    sortAlgorithm: { name: 'Selection Sort',
      url: 'selection-sort',
      description: 'An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Initially, the sorted sublist is empty. The algorithm proceeds to find the smallest element in the unsorted sublist, and swaps it with the leftmost unsorted element.',
      worstCase: 'O(n<sup>2</sup>)',
      bestCase: 'O(n<sup>2</sup>)',
      averageCase: 'O(n<sup>2</sup>)'},
    iterations: action.iterations,
    sortedGroupIndex: action.sortedGroupIndex,
    currentLow: action.currentLow,
    currentlyChecking: action.currentlyChecking,
    selectionSwapping: action.selectionSwapping,
    swappedElement: action.swappedElement,
    sortArray: results2.sortArray,
    paused: results2.paused,
    isRunning: action.isRunning,
    isSorted: action.isSorted
    });
  });

  it('Should return START_INSERTION_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_INSERTION_SORT'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      sortAlgorithm: {"averageCase": "O(n<sup>2</sup>)",
        "bestCase": "O(n)",
        "description": "An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Intially, the sorted sublist is empty. The algoirthm procees to take each element and insert it into its proper position of the sorted sublist.",
        "name": "Insertion Sort",
        "url": "insertion-sort",
        "worstCase": "O(n<sup>2</sup>)"},
      currentlyChecking: 0,
      insertionIndex: 1,
      insertionKey: results.sortArray[1],
      insertionSlideRight: false,
      insertionVerticalSlide: false,
      insertionReplacedIndex: 0,
      isRunning: true,
      iterations: 0,
      isSorted: false,
      paused: false
    });
  });

  it('Should return INSERTION_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_INSERTION_SORT'
    }
    const results = sort(state, action)
    const state2 = results
    const action2 = {
    type: 'INSERTION_SORT'
    }
    const results2 = sort(state2, action2)

    expect(results2).toEqual({
      sortAlgorithm: {"averageCase": "O(n<sup>2</sup>)",
        "bestCase": "O(n)",
        "description": "An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Intially, the sorted sublist is empty. The algoirthm procees to take each element and insert it into its proper position of the sorted sublist.",
        "name": "Insertion Sort",
        "url": "insertion-sort",
        "worstCase": "O(n<sup>2</sup>)"},
      iterations: action.iterations,
      currentlyChecking: action.currentlyChecking,
      insertionIndex: action.insertionIndex,
      insertionKey: action.insertionKey,
      insertionSlideRight: action.insertionSlideRight,
      insertionVerticalSlide: action.insertionVerticalSlide,
      insertionReplacedIndex: action.insertionReplacedIndex,
      sortArray: results2.sortArray,
      paused: results2.paused,
      isRunning: action.isRunning,
      isSorted: action.isSorted
      });
    });

  it('Should return START_BUBBLE_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_BUBBLE_SORT'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      sortAlgorithm: {"averageCase": "O(n<sup>2</sup>)",
        "bestCase": "O(n)",
        "description": "An in-place sorting algorithm that repeatedly steps through the collection to be sorted, compares each pair of adjacent items, and swaps them if they are in the wrong order. The pass through the collection is repeated until no swaps are needed, which indicates that the collection is sorted.",
        "name": "Bubble Sort",
        "url": "bubble-sort",
        "worstCase": "O(n<sup>2</sup>)"},
      bubbleSwapsCounter: 0,
      bubbleIndex: 0,
      bubbleSwapping: false,
      isRunning: true,
      iterations: 0,
      isSorted: false,
      paused: false
    });
  });

  it('Should return BUBBLE_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_BUBBLE_SORT'
    }
    const results = sort(state, action)
    const state2 = results
    const action2 = {
    type: 'BUBBLE_SORT'
    }
    const results2 = sort(state2, action2)

    expect(results2).toEqual({
      sortAlgorithm: {"averageCase": "O(n<sup>2</sup>)",
        "bestCase": "O(n)",
        "description": "An in-place sorting algorithm that repeatedly steps through the collection to be sorted, compares each pair of adjacent items, and swaps them if they are in the wrong order. The pass through the collection is repeated until no swaps are needed, which indicates that the collection is sorted.",
        "name": "Bubble Sort",
        "url": "bubble-sort",
        "worstCase": "O(n<sup>2</sup>)"},
      iterations: action.iterations,
      bubbleSwapsCounter: action.bubbleSwapsCounter,
      bubbleIndex: action.bubbleIndex,
      bubbleSwapping: action.bubbleSwapping,
      sortArray: results2.sortArray,
      paused: results2.paused,
      isRunning: action.isRunning,
      isSorted: action.isSorted
    });
  });

  it('Should return START_MERGE_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_MERGE_SORT'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      mergeArrayMain: results.mergeArrayMain,
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
      sortAlgorithm: {"averageCase": "O(n lg n)",
        "bestCase": "O(n lg n)",
        "description": "A divide and conquer sorting algorithm that first breaks a collection of n items into n subcollections of one item each. Then, it repeatedly merges the subcollections to produce new sorted subcollections until there is only 1 remaining. This is the final sorted collection.",
        "name": "Merge Sort",
        "url": "merge-sort",
        "worstCase": "O(n lg n)"},
      isRunning: true,
      iterations: 0,
      isSorted: false,
      mergeFinalSort: false,
      paused: false
    });
  });

  it('Should return MERGE_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_MERGE_SORT'
    }
    const results = sort(state, action)
    const state2 = results
    const action2 = {
    type: 'MERGE_SORT'
    }
    const results2 = sort(state2, action2)

    expect(results2).toEqual({
      sortAlgorithm: {"averageCase": "O(n lg n)",
        "bestCase": "O(n lg n)",
        "description": "A divide and conquer sorting algorithm that first breaks a collection of n items into n subcollections of one item each. Then, it repeatedly merges the subcollections to produce new sorted subcollections until there is only 1 remaining. This is the final sorted collection.",
        "name": "Merge Sort",
        "url": "merge-sort",
        "worstCase": "O(n lg n)"},
      iterations: action.iterations,
      sortArray: results2.sortArray,
      paused: results2.paused,
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
    });
  });

  it('Should return START_QUICK_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_QUICK_SORT'
    }
    const results = sort(state, action)

    expect(results).toEqual({
      sortArray: results.sortArray,
      sortAlgorithm: {"averageCase": "O(n lg n)",
        "bestCase": "O(n lg n)",
        "description": "A divide and conquer sorting algorithm that works recursively. First, a 'pivot' is selected from the array (below, the last element of the array is chosen). Then, items are partitioned into two groups: those larger than the pivot and those smaller than the pivot. Once this partition process is completed, the pivot is swapped with the first item in the 'larger' side, and is thus in place. This process is repeated on the partitioned sub-arrays until the original array is sorted.",
        "name": "Quick Sort",
        "url": "quick-sort",
        "worstCase": "O(n<sup>2</sup>)"},
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
    });
  });

  it('Should return QUICK_SORT', () => {
    const state = sortState
    const action = {
    type: 'START_QUICK_SORT'
    }
    const results = sort(state, action)
    const state2 = results
    const action2 = {
    type: 'QUICK_SORT'
    }
    const results2 = sort(state2, action2)

    expect(results2).toEqual({
      sortAlgorithm: {"averageCase": "O(n lg n)",
        "bestCase": "O(n lg n)",
        "description": "A divide and conquer sorting algorithm that works recursively. First, a 'pivot' is selected from the array (below, the last element of the array is chosen). Then, items are partitioned into two groups: those larger than the pivot and those smaller than the pivot. Once this partition process is completed, the pivot is swapped with the first item in the 'larger' side, and is thus in place. This process is repeated on the partitioned sub-arrays until the original array is sorted.",
        "name": "Quick Sort",
        "url": "quick-sort",
        "worstCase": "O(n<sup>2</sup>)"},
      iterations: action.iterations,
      sortArray: results2.sortArray,
      paused: results2.paused,
      isRunning: action.isRunning,
      isSorted: action.isSorted,
      currentlyChecking: action.currentlyChecking,
      quickPivotIndex: action.quickPivotIndex,
      quickLowIndex: action.quickLowIndex,
      quickHighIndex: action.quickHighIndex,
      quickPairsToSort: action.quickPairsToSort,
      quickPriorPivots: action.quickPriorPivots,
      quickSwapping: action.quickSwapping,
      quickSwappedIndices: action.quickSwappedIndices,
      stopQuickSort: action.stopQuickSort
    });
  });

});
