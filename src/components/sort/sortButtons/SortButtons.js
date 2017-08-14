import React from 'react';
import { Link } from 'react-router';

import './sortButtons.css';

var classNames = require('classnames');

class SortButtons extends React.Component {
  render() {

    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations, isRunning, sortAlgorithm } = this.props.sort;

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

    if (isRunning && sortAlgorithm.name === 'Selection Sort') {
      selectionSortTimeout = setTimeout (()=> {
        this.props.selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations)
      }, 500);
    }

    return (
      <div className="sort-buttons">
        <button className="sort-button sort-button-size" onClick={ () => this.props.startSelectionSort(selectionSortTimeout) }>Selection Sort</button>
        <button className="sort-button sort-button-size">Insertion Sort</button>
        <button className="sort-button sort-button-size">Bubble Sort</button>
        <button className="sort-button sort-button-size">Merge Sort</button>
        <button className="sort-button sort-button-size">Quick Sort</button>
        <div className="sort-speed-buttons">
          <button className={ slowSpeedClass }>Slow</button>
          <button className={ regularSpeedClass }>Regular</button>
          <button className={ fastSpeedClass }>Fast</button>
        </div>
      </div>
    );
  }
}

export default SortButtons;
