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
          <Sidebar {...this.props} />
          <Col xs={ 12 } sm={ 8 } className="grid-section">
            <SearchButtons {...this.props} />
            <Grid {...this.props} />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default SearchAlgorithms;
