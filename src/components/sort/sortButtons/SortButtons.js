import React from 'react';
import { Link } from 'react-router';

import './sortButtons.css';

class SortButtons extends React.Component {
  render() {
    return (
      <div className="sort-buttons">
        <button onClick={ () => this.props.startSelectionSort() }>Selection Sort</button>
      </div>
    );
  }
}

export default SortButtons;
