import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Col } from 'react-bootstrap';

import './insertionSort.css';

class InsertionSort extends React.Component {
  render() {
    const { sortArray, currentlyChecking, isSorted, insertionKey, insertionIndex, insertionSlideRight, insertionVerticalSlide, insertionReplacedIndex } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    var compareArray = Array(10).fill(insertionKey);
    return (
    <Col xs={ 12 } className="sort-algo-section">
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
              return <Col xs={1} key={ `${number}${index}` } className={ `sort-box insertion-slide-right-${speedString} no-float` }>{ number }</Col>
            } else if (index === (currentlyChecking + 1)) {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box insertion-hidden no-float">{ number }</Col>
            } else if (insertionVerticalSlide && (index === insertionReplacedIndex)) {
                return <Col xs={1} key={ `${number}${index}${insertionKey}` } className={ `sort-box insertion-slide-up-${speedString} no-float` }>{ number }</Col>
            } else if (inSortedGroup && !isCurrentlyChecking) {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box insertion-sorted no-float">{ number }</Col>
            } else if (isCurrentlyChecking) {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box insertion-checking no-float">{ number }</Col>
            } else {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box insertion-unsorted no-float">{ number }</Col>
            }
          } else {
              return <Col xs={1} key={ `${number}${index}` } className="sort-box insertion-sorted no-float">{ number }</Col>
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
              return <Col xs={1} key={ `${number}${index}-compare` } className={ `sort-box insertion-box slide-down-${speedString} no-float` }> { number }</Col>
            } else {
              return <Col xs={1} key={ `${number}${index}-compare-left` } className={ `sort-box insertion-box slide-left-${speedString} no-float` }> { number }</Col>
            }
          } else {
            return <Col xs={1} key={ `${number}${index}-compare-none` } className="sort-box no-display no-float"></Col>
          }
        })}
      </CSSTransitionGroup>
    </Col>
    )
  }
}

export default InsertionSort;
