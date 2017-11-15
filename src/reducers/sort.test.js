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
      searchArray: results.sortArray,
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
      isRunning: false,
      isSorted: false,
      paused: false
    });
  });



});
