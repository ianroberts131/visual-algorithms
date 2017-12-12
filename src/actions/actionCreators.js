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


let obj = {};

obj = Object.assign(obj, actionTypeSet);
obj = Object.assign(obj, actionBinarySearch);
obj = Object.assign(obj, actionBreadthFirstSearch);
obj = Object.assign(obj, actionLinearSearch);
obj = Object.assign(obj, actionDepthFirstSearch);
obj = Object.assign(obj, actionBubbleSort);
obj = Object.assign(obj, actionHeapSort);
obj = Object.assign(obj, actionInsertionSort);
obj = Object.assign(obj, actionMergeSort);
obj = Object.assign(obj, actionQuickSort);
obj = Object.assign(obj, actionSelectionSort);

const actionCreators = Object.assign({}, obj);


console.log('inside ---- actionCreators');

export default actionCreators;
