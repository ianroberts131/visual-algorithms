import React from 'react';

import './bubbleSort.css';

class BubbleSort extends React.Component {
  render() {
    const { sortArray, bubbleIndex, isSorted, bubbleSwapsCounter, sortAlgorithm } = this.props.sort;
    return (
      <div>
        <div className="bubble-sort-box-area">
          { sortArray.map((number, index) => {
            var isCurrentIndex = (index === bubbleIndex && index < sortArray.length - 1)
            var isComparisonIndex = (index == bubbleIndex + 1 && index < sortArray.length)
            if (!isSorted) {
              if (isCurrentIndex || isComparisonIndex) {
                return <div key={ index } className="bubble-sort-box bubble-checking">{ number }</div>
              } else {
                return <div key={ index } className="bubble-sort-box bubble-unsorted">{ number }</div>
              }
            } else {
              return <div key={ index } className="bubble-sort-box bubble-sorted">{ number }</div>
            }
          })}
        </div>
        { !isSorted &&
          <div className="bubble-counter-box-wrapper">
            <p className="bubble-counter-text">Swaps Counter: { bubbleSwapsCounter }</p>
          </div>
        }
      </div>
    )
  }
}

export default BubbleSort;
