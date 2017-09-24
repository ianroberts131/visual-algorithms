import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './selectionSort.css';

class SelectionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, selectionSwapping, swappedElement, isSorted, isRunning } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    return (
      <div>
      <CSSTransitionGroup
        transitionName="selection-transition"
        transitionLeave={false}
        transitionEnterTimeout={ intervalSpeed }
        className="selection-sort-box-area"
        component="div">
        { sortArray.map((number, index) => {
          var inSortedGroup = index < sortedGroupIndex && index >= 0;
          var isCurrentlyChecking = (index === currentlyChecking && index > 0);
          var isCurrentLow = (index === currentLow && (isRunning === true));
          var isSwapped = selectionSwapping && (index === (sortedGroupIndex - 1) || (index === swappedElement));
          var distance = `${swappedElement - sortedGroupIndex + 1}`;
          if (!isSorted) {
            if (inSortedGroup) {
              if (isSwapped && (index === sortedGroupIndex - 1)) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-sorted-swapped ${speedString} right-${distance}` }>{ number }</div>
              } else {
                  return <div key={ `${number}${index}` } className="selection-sort-box selection-sorted">{ number }</div>
              }
            } else if (isSwapped && isCurrentLow && index === swappedElement) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-low-swapped ${speedString} left-${distance}` }>{ number }</div>
            } else if (isSwapped && isCurrentlyChecking && index === swappedElement) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-checking-swapped ${speedString} left-${distance}` }>{ number }</div>
            } else if (isSwapped && index === swappedElement) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-unsorted-swapped ${speedString} left-${distance}` }>{ number }</div>
            } else if (isCurrentlyChecking) {
                return <div key={ `${number}${index}` } className="selection-sort-box selection-checking">{ number }</div>
            } else if (isCurrentLow) {
                return <div key={ `${number}${index}` } className="selection-sort-box selection-current-low">{ number }</div>
            } else {
                return <div key={ `${number}${index}` } className="selection-sort-box selection-unsorted">{ number }</div>
            }
        } else {
            return <div key={ `${number}${index}` } className="selection-sort-box selection-sorted">{ number }</div>
        }
        })}
      </CSSTransitionGroup>
      <div className="selection-label-area">
        { !isSorted && isRunning && sortArray.map((number, index) => {
          if (index === currentLow) {
            return (
              <div key={ index } className="label-box">
                <div>{ '\u21D1' }</div>
                <div>Current Low</div>
              </div>
            )
          } else {
              return <div key={ index } className="label-box selection-label-hidden"></div>
          }
        })}
      </div>
    </div>
    )
  }
}

export default SelectionSort;
