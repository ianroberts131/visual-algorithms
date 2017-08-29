export var binarySearch = {
  name: "Binary Search",
  url: "binary-search",
  description: "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful."
}

export var linearSearch = {
  name: "Linear Search",
  url: "linear-search",
  description: "A search algorithm that finds the position of a target value within an array (sorted or unsorted). It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched."
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
