import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import SortArea from '../components/sort/sortArea/SortArea';
import SortButtons from '../components/sort/sortButtons/SortButtons';
import SortInformation from '../components/sort/sortInformation/SortInformation';

class SortAlgorithms extends Component {
  render() {
    return (
      <Row className="sort-algo-row">
        <SortButtons {...this.props} />
        <SortInformation {...this.props} />
        <Col xs={ 12 } className="sort-section">
          <SortArea {...this.props} />
        </Col>
      </Row>
    );
  }
}

export default SortAlgorithms;
