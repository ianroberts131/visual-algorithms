import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Col } from 'react-bootstrap';

import './quickSort.css';

class QuickSort extends React.Component {
  render() {
    const { sortArray, currentlyChecking, quickPivotIndex, quickLowIndex, quickHighIndex, quickPriorPivots, isSorted, quickSwappedIndices, stopQuickSort } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;
    return (
      <Col xs={ 12 } className="sort-algo-section">
        <CSSTransitionGroup
          transitionName="quick-transition"
          transitionLeave={false}
          transitionEnterTimeout={ intervalSpeed * .90 }
          className="quick-sort-box-area"
          component="div">
          { sortArray.map((number, index) => {
            var isPivot = index === quickPivotIndex;
            var isCurrentlyChecking = index === currentlyChecking;
            var isHighSide = (index >= quickHighIndex && index < currentlyChecking);
            var isLowSide = (index < quickHighIndex && index >= quickLowIndex);
            var isSortedElement = (index < quickLowIndex || stopQuickSort);
            var isPriorPivot = quickPriorPivots.indexOf(number) !== -1;
            var notInSortArea = ((index < quickLowIndex || index > quickPivotIndex) && !isPriorPivot);
            var leftSwapped = quickSwappedIndices[0] === index;
            var rightSwapped = quickSwappedIndices[1] === index;
            var distance = `${quickSwappedIndices[1] - quickSwappedIndices[0]}`;
            if (!isSorted) {
              if (leftSwapped && isLowSide) {
                return <Col xs={1} key={ `${number}${index}` } className={ `sort-box left-swapped-low ${speedString} quick-left-${distance} no-float` }>{ number }</Col>
              } else if (leftSwapped && isPriorPivot) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box left-swapped-prior-pivot ${speedString} quick-left-${distance} no-float` }>{ number }</Col>
              } else if (leftSwapped && notInSortArea) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box left-swapped-unsorted ${speedString} quick-left-${distance} no-float` }>{ number }</Col>
              } else if (rightSwapped && isHighSide) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box right-swapped-high ${speedString} quick-right-${distance} no-float` }>{ number }</Col>
              } else if (rightSwapped && isPriorPivot) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box right-swapped-prior-pivot ${speedString} quick-right-${distance} no-float` }>{ number }</Col>
              } else if (rightSwapped && notInSortArea) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box right-swapped-unsorted ${speedString} quick-right-${distance} no-float` }>{ number }</Col>
              } else if (rightSwapped && isSortedElement) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box right-swapped-sorted ${speedString} quick-right-${distance} no-float` }>{ number }</Col>
              } else if (rightSwapped && isPivot) {
                  return <Col xs={1} key={ `${number}${index}` } className={ `sort-box right-swapped-pivot ${speedString} quick-right-${distance} no-float` }>{ number }</Col>
              } else if (isPriorPivot || isSortedElement) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-sorted no-float">{ number }</Col>
              } else if (notInSortArea) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-not-checking no-float">{ number }</Col>
              } else if (isPivot) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-pivot no-float">{ number }</Col>
              } else if (isCurrentlyChecking) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-checking no-float">{ number }</Col>
              } else if (isHighSide) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-high-side no-float">{ number }</Col>
              } else if (isLowSide) {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-low-side no-float">{ number }</Col>
              } else {
                  return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-unsorted no-float">{ number }</Col>
              }
            } else {
                return <Col xs={1} key={ `${number}${index}` } className="sort-box quick-sorted no-float">{ number }</Col>
            }
          })}
        </CSSTransitionGroup>
        <Col xs={ 12 } className="quick-label-area">
          { !isSorted && !stopQuickSort && sortArray.map((number, index) =>  {
            var isPriorPivot = quickPriorPivots.indexOf(number) !== -1;
            if (index === quickPivotIndex) {
              return (
                <Col xs={1} key={ index } className="label-box no-float">
                  <div>{ '\u21D1' }</div>
                  <div>Pivot</div>
                </Col>
              )
            } else if (isPriorPivot) {
              return (
                <Col xs={1} key={ index } className="label-box no-float">
                  <div>{ '\u21D1' }</div>
                  <div>Prior Pivot</div>
                </Col>
              )
            } else {
                return <Col xs={1} key={ index } className="label-box quick-label-hidden no-float"></Col>
            }
          }) }
        </Col>
      </Col>
    )
  }
}

export default QuickSort;
