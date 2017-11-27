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
            if (targetFound === false) {
              if (!inSearchArea) {
                return <div key={ index } className={number > -1 ? "grid-item not-in-remaining-elements" : "grid-item hidden-element"}>{ number }</div>;
              } else if (isHighOrLow) {
                return <div key={ index } className={number > -1 ? "grid-item high-or-low-element" : "grid-item hidden-element"}>{ number }</div>;
              } else if (isTestItem) {
                return <div key={ index } className={number > -1 ? "grid-item target-element" : "grid-item hidden-element"}>{ number }</div>;
              } else {
                return <div key={ index } className={number > -1 ? "grid-item in-remaining-elements" : "grid-item hidden-element"}>{ number }</div>;
              }
            } else {
                if (isTargetItem) {
                  return <div key={ index } className={number > -1 ? "grid-item target-element" : "grid-item hidden-element"}>{ number }</div>;
                } else {
                  return <div key={ index } className={number > -1 ? "grid-item not-in-remaining-elements" : "grid-item hidden-element"}>{ number }</div>;
                }
            }
          })}
        </Col>
      </Row>
    )
  }
}

export default Grid;
