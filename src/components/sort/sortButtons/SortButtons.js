import React from 'react';
import { Link } from 'react-router';

import './sortButtons.css';

class SortButtons extends React.Component {
  render() {

    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations, isRunning, sortAlgorithm } = this.props.sort;

    var selectionSortTimeout;

    if (isRunning && sortAlgorithm.name === 'Selection Sort') {
      selectionSortTimeout = setTimeout (()=> {
        this.props.selectionSort(sortArray, sortedGroupIndex, currentlyChecking, currentLow, iterations)
      }, 500);
    }

    return (
      <div className="sort-buttons">
        <button onClick={ () => this.props.startSelectionSort(selectionSortTimeout) }>Selection Sort</button>
      </div>
    );
  }
}

export default SortButtons;
