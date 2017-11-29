import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './grid.css';

class Grid extends React.Component {
  render() {
    const { searchArray, low, high, testItem, targetFound, target } = this.props.search;
    return (
      <Row className="grid-container">
        <Col xs={ 12 } className="grid">
          { searchArray.map((number, index) => {
            var inSearchArea = index >= low && index <= high;
            var isTestItem = index === testItem && targetFound === false;
            var isHighOrLow = index === low || index === high;
            var isTargetItem = index === target && targetFound === true;
            var hiddenElement = "grid-item hidden-element";
            var notInRemainingElements = "grid-item not-in-remaining-elements";
            var targetElements = "grid-item target-element";
            var inRemaingElements = "grid-item in-remaining-elements";
            var highOrLowElement = "grid-item high-or-low-element";
            var veiwOfElements = "";

            if (targetFound === false) {
              if (!inSearchArea){
                veiwOfElements = notInRemainingElements;
              } else if (isHighOrLow) {
                veiwOfElements = highOrLowElement;
              } else if (isTestItem) {
                veiwOfElements = targetElements;
              } else {
                veiwOfElements = inRemaingElements;
              }
            } else {
              if (isTargetItem) {
                veiwOfElements = targetElements;
              } else {
                veiwOfElements = notInRemainingElements;
              }
            }
            return <div key={ index } className={number > -1 ? veiwOfElements : hiddenElement }>{ number }</div>;
          })}
        </Col>
      </Row>
    )
  }
}

export default Grid;
