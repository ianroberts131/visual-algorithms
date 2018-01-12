import * as  actionBaseSet from './actionBaseSet';
import * as  actionBinarySearch from './actionBinarySearch';
import * as  actionBreadthFirstSearch from './actionBreadthFirstSearch';
import * as  actionLinearSearch from './actionLinearSearch';
import * as  actionDepthFirstSearch from './actionDepthFirstSearch';
import * as  actionBubbleSort from './actionBubbleSort';
import * as  actionHeapSort from './actionHeapSort';
import * as  actionInsertionSort from './actionInsertionSort';
import * as  actionMergeSort from './actionMergeSort';
import * as  actionQuickSort from './actionQuickSort';
import * as  actionSelectionSort from './actionSelectionSort';

let actionObj = {};

actionObj = Object.assign(actionObj, actionBaseSet, actionBinarySearch, actionBreadthFirstSearch, actionLinearSearch, actionDepthFirstSearch,
  actionBubbleSort, actionHeapSort, actionInsertionSort, actionMergeSort, actionQuickSort, actionSelectionSort );

export const actionCreators = Object.assign({}, actionObj);
