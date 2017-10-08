import React from 'react';
import SelectionSort from '../selectionSort/SelectionSort';
import InsertionSort from '../insertionSort/InsertionSort';
import BubbleSort from '../bubbleSort/BubbleSort';
import MergeSort from '../mergeSort/MergeSort';
import QuickSort from '../quickSort/QuickSort';
import { Col } from 'react-bootstrap';

import './sortArea.css';

class SortArea extends React.Component {
  render() {
    const { sortAlgorithm } = this.props.sort;
    return (
      <Col xs={ 12 } className="sort-area-section">
        { sortAlgorithm.name === "Selection Sort" &&
          <SelectionSort {...this.props} />
        }
        { sortAlgorithm.name === "Insertion Sort" &&
          <InsertionSort {...this.props} />
        }
        { sortAlgorithm.name === "Bubble Sort" &&
          <BubbleSort {...this.props} />
        }
        { sortAlgorithm.name === "Merge Sort" &&
          <MergeSort {...this.props} />
        }
        { sortAlgorithm.name === "Quick Sort" &&
          <QuickSort {...this.props} />
        }
      </Col>
    )
  }
}

export default SortArea;
