import React, { Component } from 'react';
import SortArea from '../components/sort/sortArea/SortArea';
import SortButtons from '../components/sort/sortButtons/SortButtons';
import SortInformation from '../components/sort/sortInformation/SortInformation';

class SortAlgorithms extends Component {
  render() {
    return (
      <div>
        <SortButtons {...this.props} />
        <SortInformation {...this.props} />
        <section className="sort-section">
          <SortArea {...this.props} />
        </section>
      </div>
    );
  }
}

export default SortAlgorithms;
