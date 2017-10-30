import React from 'react';
import { Col } from 'react-bootstrap';

import './sideBar.css';

class Sidebar extends React.Component {
  render() {
    const { searchAlgorithm, searchNumber, iterations, low, high, index } = this.props.search;
    return (
      <Col xs={ 12 } sm={ 4 } className="side-bar-section">
          <Col xs={ 6 } sm={ 12 } className="algorithm-info">
            <p id="algorithm-name"><strong>Algorithm: </strong>{ searchAlgorithm.name }</p>
            <p id="description">{ searchAlgorithm.description }</p>
          </Col>
          <Col xs={ 6 } sm={ 12 } className="iteration-info-container">
            <div className="iteration-info">
              <p className="iteration-info-item">Target Item <span>{ searchNumber }</span></p>
              <p className="iteration-info-item">Iterations <span>{ iterations }</span></p>
              <p className="iteration-info-item">Minimum index <span>{ low }</span></p>
              <p className="iteration-info-item">Maximum index <span>{ high }</span></p>
              <p className="iteration-info-item">Item located at index <span>{ index }</span></p>
            </div>
          </Col>
          <Col xs={ 6 } sm={ 12 } className="iteration-info-container">
            <div>
              <p id="complexity-title" className="header">Complexity:</p>
            </div>
            <div className="iteration-info">
              <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Worst Case: " + searchAlgorithm.worstCase}}></p>
              <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Best Case: " + searchAlgorithm.bestCase}}></p>
              <p className="complexity-detail" dangerouslySetInnerHTML={{__html: "Average Case: " + searchAlgorithm.averageCase}}></p>
            </div>
          </Col>
        </Col>
    )
  }
}

export default Sidebar;
