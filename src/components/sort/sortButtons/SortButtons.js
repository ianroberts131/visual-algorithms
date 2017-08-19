import React from 'react';
import { Link } from 'react-router';

import './sortButtons.css';

var classNames = require('classnames');

class SortButtons extends React.Component {
  render() {

    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow,
            iterations, isRunning, insertionIndex, insertionKey, bubbleSwapsCounter,
            bubbleIndex, sortAlgorithm } = this.props.sort;

    const { intervalSpeed, speedString, regularActive, slowActive, fastActive } = this.props.speed;

    var regularSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': regularActive,
    });

    var slowSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': slowActive,
    });

    var fastSpeedClass = classNames({
      'sort-button-size': true,
      'sort-speed-button': true,
      'active-sort-btn': fastActive,
    });

    var selectionSortTimeout;
    var insertionSortTimeout;
    var bubbleSortTimeout;

    if (isRunning && sortAlgorithm.name === 'Selection Sort') {
      selectionSortTimeout = setTimeout (()=> {
        this.props.selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations)
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Insertion Sort') {
      insertionSortTimeout = setTimeout (()=> {
        this.props.insertionSort(sortArray, insertionIndex, insertionKey, currentlyChecking, iterations);
      }, intervalSpeed);
    }

    if (isRunning && sortAlgorithm.name === 'Bubble Sort') {
      bubbleSortTimeout = setTimeout (()=> {
        this.props.bubbleSort(sortArray, bubbleSwapsCounter, bubbleIndex, iterations);
      }, intervalSpeed);
    }

    return (
      <div className="sort-buttons">
        <button className="sort-button sort-button-size" onClick={ () => this.props.startSelectionSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Selection Sort</button>
        <button className="sort-button sort-button-size" onClick={ () => this.props.startInsertionSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Insertion Sort</button>
        <button className="sort-button sort-button-size" onClick={ () => this.props.startBubbleSort(selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Bubble Sort</button>
        <button className="sort-button sort-button-size">Merge Sort</button>
        <button className="sort-button sort-button-size">Quick Sort</button>
        <div className="sort-speed-buttons">
          <button className={ slowSpeedClass } onClick={ () => this.props.changeSpeed('slow', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Slow</button>
          <button className={ regularSpeedClass } onClick={ () => this.props.changeSpeed('regular', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Regular</button>
          <button className={ fastSpeedClass } onClick={ () => this.props.changeSpeed('fast', selectionSortTimeout, insertionSortTimeout, bubbleSortTimeout) }>Fast</button>
        </div>
      </div>
    );
  }
}

export default SortButtons;
