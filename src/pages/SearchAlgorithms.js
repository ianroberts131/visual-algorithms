import React, { Component } from 'react';
import Grid from '../components/search/grid/Grid';
import SearchButtons from '../components/search/searchButtons/SearchButtons';
import Sidebar from '../components/search/sideBar/Sidebar';
import { Row, Col } from 'react-bootstrap';

class SearchAlgorithms extends Component {

  render() {

    return (
      <Row className="search-algo-row">
        <Col xs={ 12 } className="search-area">
          <SearchButtons {...this.props} />
          <Sidebar {...this.props} />
        </Col>
        <Col xs={ 12 } sm={ 12 } className="grid-section">
          <Grid {...this.props} />
        </Col>
      </Row>
    );
  }
}

export default SearchAlgorithms;
