import React from 'react';

class Grid extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid">
          { this.props.searchArray.map((number, index) => {
            var inSearchArea = index >= this.props.low && index <= this.props.high;
            var isTestItem = index === this.props.testItem && this.props.targetFound === false;
            var isHighOrLow = index === this.props.low || index === this.props.high;
            var isTargetItem = index === this.props.target && this.props.targetFound === true;
            if (this.props.targetFound === false) {
              if (!inSearchArea) {
                return <div className="grid-item not-in-remaining-elements">{ number }</div>;
              } else if (isHighOrLow) {
                return <div className="grid-item high-or-low-element">{ number }</div>;
              } else if (isTestItem) {
                return <div className="grid-item target-element">{ number }</div>;
              } else {
                return <div className="grid-item in-remaining-elements">{ number }</div>;
              }
            } else {
                if (isTargetItem) {
                  return <div className="grid-item target-element">{ number }</div>;
                } else {
                  return <div className="grid-item not-in-remaining-elements">{ number }</div>;
                }
            }
          })}
        </div>
      </div>
    )
  }
}

export default Grid;