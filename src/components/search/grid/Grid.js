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
                return <div key={ index } className="grid-item not-in-remaining-elements">{ number }</div>;
              } else if (isHighOrLow) {
                return <div key={ index } className="grid-item high-or-low-element">{ number }</div>;
              } else if (isTestItem) {
                return <div key={ index } className="grid-item target-element">{ number }</div>;
              } else {
                return <div key={ index } className="grid-item in-remaining-elements">{ number }</div>;
              }
            } else {
                if (isTargetItem) {
                  return <div key={ index } className="grid-item target-element">{ number }</div>;
                } else {
                  return <div key={ index } className="grid-item not-in-remaining-elements">{ number }</div>;
                }
            }
          })}
        </Col>
      </Row>
    )
  }
}

export default Grid;
