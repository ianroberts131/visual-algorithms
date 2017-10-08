import React, { Component } from 'react';
import Grid from '../components/search/grid/Grid';
import SearchButtons from '../components/search/searchButtons/SearchButtons';
import Sidebar from '../components/search/sideBar/Sidebar';
import { Row } from 'react-bootstrap';

class SearchAlgorithms extends Component {

  render() {

    return (
      <Row>
        <Sidebar {...this.props} />
        <section className="grid-section">
          <SearchButtons {...this.props} />
          <Grid {...this.props} />
        </section>
      </Row>
    );
  }
}

export default SearchAlgorithms;
