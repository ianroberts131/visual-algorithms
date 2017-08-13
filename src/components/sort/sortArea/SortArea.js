import React from 'react';

import './sortArea.css';

class SortArea extends React.Component {
  render() {
    const { sortArray } = this.props.sort;
    return (
      <div>
        <div className="sort-box-area">
          { sortArray.map((number, index) => {
            return <div key={ index } className="sort-box unsorted">{ number }</div>
          })}
        </div>
      </div>
    )
  }
}

export default SortArea;
