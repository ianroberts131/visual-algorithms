import React from 'react';

import './sortInformation.css';

class SortInformation extends React.Component {
  render() {
    const { sortAlgorithm, iterations } = this.props.sort;
    return (
      <section className="sort-algorithm-info-section">
        <div className="sort-algorithm-info">
          <p id="sort-algorithm-name" className="header"><strong>Algorithm: </strong>{ sortAlgorithm.name }</p>
          <p id="sort-algorithm-description">Description: { sortAlgorithm.description }</p>
        </div>
        <div className="sort-algorithm-details">
          <p id="complexity-title" className="header">Complexity Analysis</p>
          <p className="complexity-detail">Worst Case Performance: {sortAlgorithm.worstCase}</p>
          <p className="complexity-detail">Best Case Performance: {sortAlgorithm.bestCase}</p>
          <p className="complexity-detail">Average Case Performance: {sortAlgorithm.averageCase}</p>
        </div>
        <div className="iterations-section">
          <p id="iterations-title" className="header">Iterations</p>
          <p id="iterations">{ iterations }</p>
        </div>
      </section>
    );
  }
}

export default SortInformation;
