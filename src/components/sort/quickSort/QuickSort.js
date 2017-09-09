import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './quickSort.css';

class QuickSort extends React.Component {
  render() {
    const { sortArray, currentlyChecking, quickPivotIndex, quickLowIndex, quickHighIndex, quickPairsToSort, quickPriorPivots, isSorted } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;
    return (
      <div>
        <CSSTransitionGroup
          transitionName="quick-transition"
          transitionLeave={false}
          transitionEnterTimeout={ intervalSpeed }
          className="quick-sort-box-area"
          component="div">
          { sortArray.map((number, index) => {
            var isPivot = index === quickPivotIndex;
            var isCurrentlyChecking = index === currentlyChecking;
            var isHighSide = (index >= quickHighIndex && index < currentlyChecking);
            var isLowSide = (index < quickHighIndex && index >= quickLowIndex);
            var isSortedElement = (index < quickLowIndex);
            var isPriorPivot = quickPriorPivots.indexOf(number) != -1;
            var notInSortArea = ((index < quickLowIndex || index > quickPivotIndex) && !isPriorPivot);
            if (!isSorted) {
              if (isPriorPivot || isSortedElement) {
                return <div key={ `${number}${index}` } className="quick-sort-box quick-sorted">{ number }</div>
              } else if (notInSortArea) {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-not-checking">{ number }</div>
              } else if (isPivot) {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-pivot">{ number }</div>
              } else if (isCurrentlyChecking) {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-checking">{ number }</div>
              } else if (isHighSide) {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-high-side">{ number }</div>
              } else if (isLowSide) {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-low-side">{ number }</div>
              } else {
                  return <div key={ `${number}${index}` } className="quick-sort-box quick-unsorted">{ number }</div>
              }
            } else {
                return <div key={ `${number}${index}` } className="quick-sort-box quick-sorted">{ number }</div>
            }
          })}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default QuickSort;
