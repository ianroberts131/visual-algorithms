import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './selectionSort.css';

class SelectionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, selectionSwapping, swappedElement, isSorted, } = this.props.sort;
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
          var isCurrentlyChecking = index === currentlyChecking;
          var isCurrentLow = index === currentLow;
          var isSwapped = selectionSwapping && (index === (sortedGroupIndex - 1) || (index === swappedElement));
          var distance = `${swappedElement - sortedGroupIndex + 1}`;
          if (!isSorted) {
            if (inSortedGroup) {
              if (isSwapped && (index === sortedGroupIndex - 1)) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-sorted-swapped-${speedString} right-${distance}` }>{ number }</div>
              } else {
                  return <div key={ `${number}${index}` } className="selection-sort-box selection-sorted">{ number }</div>
              }
            } else if (isSwapped && index === swappedElement) {
                return <div key={ `${number}${index}` } className={ `selection-sort-box selection-unsorted-swapped-${speedString} left-${distance}` }>{ number }</div>
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
    </div>
    )
  }
}

export default SelectionSort;
