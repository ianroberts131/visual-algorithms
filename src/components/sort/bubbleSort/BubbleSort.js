import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './bubbleSort.css';

class BubbleSort extends React.Component {
  render() {
    const { sortArray, bubbleIndex, isSorted, bubbleSwapsCounter, bubbleSwapping } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    return (
      <div>
        <CSSTransitionGroup
          transitionName="bubble-transition"
          transitionLeave={false}
          transitionEnterTimeout={ intervalSpeed * 0.9 }
          className="bubble-sort-box-area"
          component="div">
          { sortArray.map((number, index) => {
            var isCurrentIndex = (index === bubbleIndex && index < sortArray.length - 1)
            var isComparisonIndex = (index === bubbleIndex + 1 && index < sortArray.length)
            var isLastIndex = (index === bubbleIndex && index === sortArray.length - 1)
            if (!isSorted) {
              if (isCurrentIndex && !bubbleSwapping) {
                return <div key={ `${number}${index}` } className="bubble-sort-box bubble-checking">{ number }</div>
              } else if (isComparisonIndex) {
                  return <div key={ `${number}${index}` } className="bubble-sort-box bubble-checking">{ number }</div>
              } else if (isCurrentIndex && bubbleSwapping ) {
                  return <div key={ `${number}${index}` } className={`bubble-sort-box bubble-swapping-right-${speedString}`}>{ number }</div>
              } else if ((index === bubbleIndex - 1) && bubbleSwapping) {
                  return <div key={ `${number}${index}` } className={`bubble-sort-box bubble-swapping-left-${speedString}`}>{ number }</div>
              } else if (isLastIndex && bubbleSwapping) {
                  return <div key={ `${number}${index}` } className={`bubble-sort-box bubble-swapping-last-${speedString}`}>{ number }</div>
              } else {
                  return <div key={ `${number}${index}` } className="bubble-sort-box bubble-unsorted">{ number }</div>
              }
            } else {
                return <div key={ `${number}${index}` } className="bubble-sort-box bubble-sorted">{ number }</div>
            }
          })}
        </CSSTransitionGroup>
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
