import React from 'react';

import './sideBar.css';

class Sidebar extends React.Component {
  render() {
    const { searchAlgorithm, searchNumber, iterations, low, high, index } = this.props.search;
    return (
      <section className="side-bar-section">
          <div className="algorithm-info">
            <p id="algorithm-name"><strong>Algorithm: </strong>{ searchAlgorithm.name }</p>
            <p id="description">{ searchAlgorithm.description }</p>
          </div>
          <div className="iteration-info-container">
            <div className="iteration-info">
              <p className="iteration-info-item">Target Item <span>{ searchNumber }</span></p>
              <p className="iteration-info-item">Iterations <span>{ iterations }</span></p>
              <p className="iteration-info-item">Minimum index <span>{ low }</span></p>
              <p className="iteration-info-item">Maximum index <span>{ high }</span></p>
              <p className="iteration-info-item">Item located at index <span>{ index }</span></p>
            </div>
          </div>
        </section>
    )
  }
}

export default Sidebar;
