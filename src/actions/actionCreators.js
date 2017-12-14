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

actionObj = Object.assign(actionObj, actionBaseSet);
actionObj = Object.assign(actionObj, actionBinarySearch);
actionObj = Object.assign(actionObj, actionBreadthFirstSearch);
actionObj = Object.assign(actionObj, actionLinearSearch);
actionObj = Object.assign(actionObj, actionDepthFirstSearch);
actionObj = Object.assign(actionObj, actionBubbleSort);
actionObj = Object.assign(actionObj, actionHeapSort);
actionObj = Object.assign(actionObj, actionInsertionSort);
actionObj = Object.assign(actionObj, actionMergeSort);
actionObj = Object.assign(actionObj, actionQuickSort);
actionObj = Object.assign(actionObj, actionSelectionSort);

export const actionCreators = Object.assign({}, actionObj);
