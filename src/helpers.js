export function randomlyGenerateArray(size, maxNumber, sorted=true) {
  var array = [];
  while (array.length < size) {
    var newNumber = Math.floor((Math.random() * maxNumber) + 1);
    if (array.length === 0 || array.indexOf(newNumber) === -1) {
      array.push(newNumber);
    }
  }

  return sorted ? array.sort(function(a,b){return a - b}) : array;
}

// build max heap tree from random array
const {floor} = Math;

export function buildMaxHeap(array, maxHeapComparator = maxHeapAscendantComparator) {
  const {floor} = Math;
	const count = array.length;
	let end = count - 1;

	maxHeapify(array, maxHeapComparator);
	return array;
}

    function maxHeapAscendantComparator(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    }

    function maxHeapify(array, maxHeapComparator) {
	    const count = array.length;
	    let start = floor((count - 2) / 2);
	    while (start >= 0) {
		    heapShiftDown(array, start, count - 1, maxHeapComparator);
		    start = start - 1;
	    }
    }

    function heapShiftDown(array, start, end, maxHeapComparator) {
	    let root = start;

	    while (root * 2 + 1 <= end) {
		    const lChild = root * 2 + 1;
		    const rChild = lChild + 1;
		    let swap = root;

		    if (maxHeapComparator(array[swap], array[lChild]) < 0) {
			    swap = lChild;
		    }
		    if (rChild <= end && maxHeapComparator(array[swap], array[rChild]) < 0) {
			    swap = rChild;
		    }
		    if (swap === root) {
			    return;
		    }

		    maxHeapSwapElems(array, root, swap);
		    root = swap;
	    }
    }

    function maxHeapSwapElems(array, a, b) {
	    const tmp = array[a];
	    array[a] = array[b];
	    array[b] = tmp;
    }

export function setUpHeapSearchArray(searchArray, maxHeapSearchArray) {
  var stepArray = [7,
                34, 40,
                47, 50, 54, 57,
                61, 62, 64, 66, 68, 70, 72, 73,
                75, 76, 77, 78, 79, 80, 81, 82, 83];

  for (var i = 0; i < 225; i++) {
    searchArray[i] = -1;
  }
  for (var i = 0; i < 24; i++) {
    var location = stepArray[i];
    searchArray[location] = maxHeapSearchArray[i];
  }
  return searchArray;
}

export function setUpTestMaxHeapArray() {
  var stepArray = [7,
                34, 40,
                47, 50, 54, 57,
                61, 62, 64, 66, 68, 70, 72, 73,
                75, 76, 77, 78, 79, 80, 81, 82, 83];

  var testMaxHeapArray = [];

  for (var i = 15; i < 24; i++) {
    testMaxHeapArray.push(stepArray[i]);
  }
  for (var i = 7; i < 15; i++) {
    testMaxHeapArray.push(stepArray[i]);
  }
  for (var i = 3; i < 7; i++) {
    testMaxHeapArray.push(stepArray[i]);
  }
  for (var i = 1; i < 3; i++) {
    testMaxHeapArray.push(stepArray[i]);
  }
  testMaxHeapArray.push(stepArray[0]);
  return testMaxHeapArray;
}
