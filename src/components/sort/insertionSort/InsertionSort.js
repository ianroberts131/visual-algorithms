import React from 'react';

import './insertionSort.css';

class InsertionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, isSorted, sortAlgorithm, insertionKey, insertionIndex } = this.props.sort;
    return (
    <div>
      <div className="insertion-sort-box-area">
        { sortArray.map((number, index) => {
          var inSortedGroup = index < insertionIndex && index >= 0;
          var isCurrentlyChecking = index === currentlyChecking;
          var isCurrentLow = index === currentLow;
          if (!isSorted) {
            if (inSortedGroup && !isCurrentlyChecking) {
              return <div key={ index } className="insertion-sort-box insertion-sorted">{ number }</div>
            } else if (isCurrentlyChecking) {
              return <div key={ index } className="insertion-sort-box insertion-checking">{ number }</div>
            } else {
              return <div key={ index } className="insertion-sort-box insertion-unsorted">{ number }</div>
            }
          } else {
              return <div key={ index } className="insertion-sort-box insertion-sorted">{ number }</div>
          }
        })}
      </div>
      { !isSorted &&
          <div className="insertion-box-wrapper">
            <div className="insertion-box">{ insertionKey }</div>
          </div>
      }
    </div>
    )
  }
}

export default InsertionSort;
