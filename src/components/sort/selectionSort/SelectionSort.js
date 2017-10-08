import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Col } from 'react-bootstrap';

import './selectionSort.css';

class SelectionSort extends React.Component {
  render() {
    const { sortArray, sortedGroupIndex, currentlyChecking, currentLow, selectionSwapping, swappedElement, isSorted, isRunning } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;

    return (
      <Col xs={ 12 } className="sort-algo-section">
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
                return <Col xs={1} key={ `${number}${index}` } className={ `sort-box selection-sorted-swapped ${speedString} right-${distance} no-float` }>{ number }</Col>
              } else {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box selection-sorted no-float">{ number }</Col>
              }
            } else if (isSwapped && isCurrentLow && index === swappedElement) {
                return <Col xs={1} key={ `${number}${index}` } className={ `sort-box selection-low-swapped ${speedString} left-${distance} no-float` }>{ number }</Col>
            } else if (isSwapped && isCurrentlyChecking && index === swappedElement) {
                return <Col xs={1} key={ `${number}${index}` } className={ `sort-box selection-checking-swapped ${speedString} left-${distance} no-float` }>{ number }</Col>
            } else if (isSwapped && index === swappedElement) {
                return <Col xs={1} key={ `${number}${index}` } className={ `sort-box selection-unsorted-swapped ${speedString} left-${distance} no-float` }>{ number }</Col>
            } else if (isCurrentlyChecking) {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box selection-checking no-float">{ number }</Col>
            } else if (isCurrentLow) {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box selection-current-low no-float">{ number }</Col>
            } else {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box selection-unsorted no-float">{ number }</Col>
            }
        } else {
            return <Col xs={1} key={ `${number}${index}` } className="sort-box selection-sorted no-float">{ number }</Col>
        }
        })}
      </CSSTransitionGroup>
      <Col xs={ 12 } className="selection-label-area">
        { !isSorted && isRunning && sortArray.map((number, index) => {
          if (index === currentLow) {
            return (
              <Col xs={ 1 } key={ index } className="label-box no-float">
                <div>{ '\u21D1' }</div>
                <div>Current Low</div>
              </Col>
            )
          } else {
              return <Col xs={ 1 } key={ index } className="label-box selection-label-hidden no-float"></Col>
          }
        })}
      </Col>
    </Col>
    )
  }
}

export default SelectionSort;
