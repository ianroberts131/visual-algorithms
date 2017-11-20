import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Col } from 'react-bootstrap';

import './heapSort.css';


class HeapSort extends React.Component {
  render() {
    const { sortArray, bubbleIndex, isSorted, bubbleSwapsCounter, bubbleSwapping } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    return (
      <Col xs={ 12 } className="sort-algo-section">
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
                return <Col xs={1} key={ `${number}${index}` } className="sort-box bubble-checking no-float">{ number }</Col>
              } else if (isComparisonIndex) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box bubble-checking no-float">{ number }</Col>
              } else if (isCurrentIndex && bubbleSwapping ) {
                  return <Col xs={1} key={ `${number}${index}` } className={`sort-box bubble-swapping-right-${speedString} no-float`}>{ number }</Col>
              } else if ((index === bubbleIndex - 1) && bubbleSwapping) {
                  return <Col xs={1} key={ `${number}${index}` } className={`sort-box bubble-swapping-left-${speedString} no-float`}>{ number }</Col>
              } else if (isLastIndex && bubbleSwapping) {
                  return <Col xs={1} key={ `${number}${index}` } className={`sort-box bubble-swapping-last-${speedString} no-float`}>{ number }</Col>
              } else {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box bubble-unsorted no-float">{ number }</Col>
              }
            } else {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box bubble-sorted no-float">{ number }</Col>
            }
          })}
        </CSSTransitionGroup>
        { !isSorted &&
          <div className="bubble-counter-box-wrapper">
            <p className="bubble-counter-text">Swaps Counter: { bubbleSwapsCounter }</p>
          </div>
        }
      </Col>
    )
  }
}

export default HeapSort;
