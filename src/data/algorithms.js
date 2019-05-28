export var binarySearch = {
  name: "Binary Search",
  url: "binary-search",
  description: "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.",
  worstCase: "O(lg n)",
  bestCase: "O(1)",
  averageCase: "O(lg n)"
}

export var linearSearch = {
  name: "Linear Search",
  url: "linear-search",
  description: "A search algorithm that finds the position of a target value within an array (sorted or unsorted). It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched.",
  worstCase: "O(n)",
  bestCase: "O(1)",
  averageCase: "O(n)"
}

export var selectionSort = {
  name: "Selection Sort",
  url: "selection-sort",
  description: "An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Initially, the sorted sublist is empty. The algorithm proceeds to find the smallest element in the unsorted sublist, and swaps it with the leftmost unsorted element.",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n<sup>2</sup>)",
  averageCase: "O(n<sup>2</sup>)"
}

export var insertionSort = {
  name: "Insertion Sort",
  url: "insertion-sort",
  description: "An in-place sorting algorithm that divides a collection into two parts: a sublist of sorted elements and a sublist of unsorted elements. Intially, the sorted sublist is empty. The algoirthm procees to take each element and insert it into its proper position of the sorted sublist.",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n)",
  averageCase: "O(n<sup>2</sup>)"
}

export var bubbleSort = {
  name: "Bubble Sort",
  url: "bubble-sort",
  description: "An in-place sorting algorithm that repeatedly steps through the collection to be sorted, compares each pair of adjacent items, and swaps them if they are in the wrong order. The pass through the collection is repeated until no swaps are needed, which indicates that the collection is sorted.",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n)",
  averageCase: "O(n<sup>2</sup>)"
}

export var mergeSort = {
  name: "Merge Sort",
  url: "merge-sort",
  description: "A divide and conquer sorting algorithm that first breaks a collection of n items into n subcollections of one item each. Then, it repeatedly merges the subcollections to produce new sorted subcollections until there is only 1 remaining. This is the final sorted collection.",
  worstCase: "O(n lg n)",
  bestCase: "O(n lg n)",
  averageCase: "O(n lg n)"
}

export var quickSort = {
  name: "Quick Sort",
  url: "quick-sort",
  description: "A divide and conquer sorting algorithm that works recursively. First, a 'pivot' is selected from the array (below, the last element of the array is chosen). Then, items are partitioned into two groups: those larger than the pivot and those smaller than the pivot. Once this partition process is completed, the pivot is swapped with the first item in the 'larger' side, and is thus in place. This process is repeated on the partitioned sub-arrays until the original array is sorted.",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n lg n)",
  averageCase: "O(n lg n)"
}
