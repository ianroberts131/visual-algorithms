import React from 'react';

import './sortInformation.css';
import { Col } from 'react-bootstrap';

class SortInformation extends React.Component {
  render() {
    const { sortAlgorithm, iterations } = this.props.sort;
    return (
      <Col xs={ 12 } className="sort-info-section">
        <Col xs={ 12 } md={ 10 } mdOffset={ 1 } lg={ 6 } lgOffset={ 1 } className="sort-algorithm-info">
          <p id="sort-algorithm-name" className="header"><strong>Algorithm: </strong>{ sortAlgorithm.name }</p>
          <p id="sort-algorithm-description">{ sortAlgorithm.description }</p>
        </Col>
        <Col xs={ 6 } smOffset={ 1 } md={ 4 } mdOffset={ 2 } lg={ 2 } lgOffset={ 0 } className="sort-algorithm-details">
          <p id="complexity-title" className="header">Complexity</p>
          <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Worst Case: " + sortAlgorithm.worstCase}}></p>
          <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Best Case: " + sortAlgorithm.bestCase}}></p>
          <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Average Case: " + sortAlgorithm.averageCase}}></p>
        </Col>
        <Col xs={ 6 } sm={ 4 } lg={ 2 } className="iterations-section">
          <p id="iterations-title" className="header">Iterations</p>
          <p id="iterations">{ iterations }</p>
        </Col>
      </Col>
    );
  }
}

export default SortInformation;
