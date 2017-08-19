import React from 'react';
import SelectionSort from '../selectionSort/SelectionSort';
import InsertionSort from '../insertionSort/InsertionSort';

import './sortArea.css';

class SortArea extends React.Component {
  render() {
    const { sortAlgorithm } = this.props.sort;
    return (
      <div>
        { sortAlgorithm.name === "Selection Sort" &&
          <SelectionSort {...this.props} />
        }
        { sortAlgorithm.name === "Insertion Sort" &&
          <InsertionSort {...this.props} />
        }
      </div>
    )
  }
}

export default SortArea;
