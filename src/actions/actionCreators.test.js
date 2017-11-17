
import { sortBaseState } from './actionCreators';
import { searchBaseState } from './actionCreators';
import { togglePlayPause } from './actionCreators';
import { startSelectionSort } from './actionCreators';
import { startInsertionSort } from './actionCreators';
import { startBubbleSort } from './actionCreators';
import { startMergeSort } from './actionCreators';
import { startQuickSort } from './actionCreators';
import { startBinarySearch } from './actionCreators';
import { startLinearSearch } from './actionCreators';
import { changeSpeed } from './actionCreators';

describe('sortBaseState type', () => {
  it('Should Create an Action to sortBaseState', () => {
    expect(sortBaseState).toEqual(sortBaseState);
  });
});

describe('searchBaseState type', () => {
  it('Should Create an Action to searchBaseState', () => {
    expect(searchBaseState).toEqual(searchBaseState);
  });
});

describe('togglePlayPause type', () => {
  it('Should Create an Action to togglePlayPause', () => {
    expect(togglePlayPause).toEqual(togglePlayPause);
  });
});

describe('startSelectionSort type', () => {
  it('Should Create an Action to startSelectionSort', () => {
    expect(startSelectionSort).toEqual(startSelectionSort);
  });
});

describe('startInsertionSort type', () => {
  it('Should Create an Action to startInsertionSort', () => {
    expect(startInsertionSort).toEqual(startInsertionSort);
  });
});

describe('startBubbleSort type', () => {
  it('Should Create an Action to startBubbleSort', () => {
    expect(startBubbleSort).toEqual(startBubbleSort);
  });
});

describe('startMergeSorttype', () => {
  it('Should Create an Action to startMergeSort', () => {
    expect(startMergeSort).toEqual(startMergeSort);
  });
});

describe('startQuickSort type', () => {
  it('Should Create an Action to startQuickSort', () => {
    expect(startQuickSort).toEqual(startQuickSort);
  });
});

describe('startBinarySearch type', () => {
  it('Should Create an Action to startBinarySearch', () => {
    expect(startBinarySearch).toEqual(startBinarySearch);
  });
});

describe('startLinearSearch type', () => {
  it('Should Create an Action to startLinearSearch', () => {
    expect(startLinearSearch).toEqual(startLinearSearch);
  });
});

describe('changeSpeed  type', () => {
  it('Should Create an Action to changeSpeed ', () => {
    expect(changeSpeed ).toEqual(changeSpeed );
  });
});
