import React, { Component } from 'react';
import SortArea from '../components/sort/sortArea/SortArea';
import SortButtons from '../components/sort/sortButtons/SortButtons';

class SortAlgorithms extends Component {
  render() {
    return (
      <div>
        <section className="sort-section">
          <SortButtons {...this.props} />
          <SortArea {...this.props} />
        </section>
      </div>
    );
  }
}

export default SortAlgorithms;
