import React from 'react';

import './selectionSort.css';

class SelectionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, isSorted, sortAlgorithm } = this.props.sort;
    return (
      <div className="selection-sort-box-area">
        { sortArray.map((number, index) => {
          var inSortedGroup = index < sortedGroupIndex && index >= 0;
          var isCurrentlyChecking = index === currentlyChecking;
          var isCurrentLow = index === currentLow;
          if (!isSorted) {
            if (inSortedGroup) {
              return <div key={ index } className="selection-sort-box selection-sorted">{ number }</div>
            } else if (isCurrentlyChecking) {
              return <div key={ index } className="selection-sort-box selection-checking">{ number }</div>
            } else if (isCurrentLow) {
              return <div key={ index } className="selection-sort-box selection-current-low">{ number }</div>
            } else {
              return <div key={ index } className="selection-sort-box selection-unsorted">{ number }</div>
            }
          } else {
              return <div key={ index } className="selection-sort-box selection-sorted">{ number }</div>
          }
        })}
      </div>
    )
  }
}

export default SelectionSort;
