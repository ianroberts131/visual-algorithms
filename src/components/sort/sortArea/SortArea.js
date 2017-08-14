import React from 'react';

import './sortArea.css';

class SortArea extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, isRunning, isSorted } = this.props.sort;
    return (
      <div>
        <div className="sort-box-area">
          { sortArray.map((number, index) => {
            var inSortedGroup = index < sortedGroupIndex && index >= 0;
            var isCurrentlyChecking = index === currentlyChecking;
            var isCurrentLow = index === currentLow;
            if (!isSorted) {
              if (inSortedGroup) {
                return <div key={ index } className="sort-box sorted">{ number }</div>
              } else if (isCurrentlyChecking) {
                return <div key={ index } className="sort-box checking">{ number }</div>
              } else if (isCurrentLow) {
                return <div key={ index } className="sort-box current-low">{ number }</div>
              } else {
                return <div key={ index } className="sort-box unsorted">{ number }</div>
              }
            } else {
                return <div key={ index } className="sort-box sorted">{ number }</div>
            }
          })}
        </div>
      </div>
    )
  }
}

export default SortArea;
