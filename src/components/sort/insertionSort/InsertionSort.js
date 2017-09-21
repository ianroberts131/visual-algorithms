import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './insertionSort.css';

class InsertionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, isSorted, insertionKey, insertionIndex, insertionSlideRight, insertionVerticalSlide, insertionReplacedIndex } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    var compareArray = Array(10).fill(insertionKey);
    return (
    <div>
      <CSSTransitionGroup
        transitionName="insertion-transition"
        transitionLeave={false}
        transitionEnterTimeout={ intervalSpeed * 0.96 }
        className="insertion-sort-box-area"
        component="div">
        { sortArray.map((number, index) => {
          var inSortedGroup = index <= insertionIndex && index >= 0;
          var isCurrentlyChecking = (index === currentlyChecking && index < sortArray.length - 1);
          if (!isSorted) {
            if (index === (currentlyChecking + 2) && insertionSlideRight && index > 0) {
              return <div key={ `${number}${index}` } className={ `insertion-sort-box insertion-slide-right-${speedString}` }>{ number }</div>
            } else if (index === (currentlyChecking + 1)) {
                return <div key={ `${number}${index}` } className="insertion-sort-box insertion-hidden">{ number }</div>
            } else if (insertionVerticalSlide && (index === insertionReplacedIndex)) {
                return <div key={ `${number}${index}${insertionKey}` } className={ `insertion-sort-box insertion-slide-up-${speedString}` }>{ number }</div>
            } else if (inSortedGroup && !isCurrentlyChecking) {
                return <div key={ `${number}${index}` } className="insertion-sort-box insertion-sorted">{ number }</div>
            } else if (isCurrentlyChecking) {
                return <div key={ `${number}${index}` } className="insertion-sort-box insertion-checking">{ number }</div>
            } else {
                return <div key={ `${number}${index}` } className="insertion-sort-box insertion-unsorted">{ number }</div>
            }
          } else {
              return <div key={ `${number}${index}` } className="insertion-sort-box insertion-sorted">{ number }</div>
          }
        })}
      </CSSTransitionGroup>
      <CSSTransitionGroup
        transitionName="insertion-compare"
        transitionLeave={false}
        transitionEnterTimeout={ intervalSpeed * 0.9 }
        className="comparison-sort-box-area"
        component="div">
        { !isSorted && compareArray.map((number, index) => {
          if ((index === currentlyChecking + 1) && (number > 0)) {
            if (index === insertionIndex) {
              return <div key={ `${number}${index}-compare` } className={ `insertion-sort-box insertion-box slide-down-${speedString}` }> { number }</div>
            } else {
              return <div key={ `${number}${index}-compare-left` } className={ `insertion-sort-box insertion-box slide-left-${speedString}` }> { number }</div>
            }
          } else {
            return <div key={ `${number}${index}-compare-none` } className="insertion-sort-box no-display"></div>
          }
        })}
      </CSSTransitionGroup>
    </div>
    )
  }
}

export default InsertionSort;
