import React, { Component } from 'react';
import Grid from '../components/search/grid/Grid';
import SearchButtons from '../components/search/searchButtons/SearchButtons';
import Sidebar from '../components/search/sideBar/Sidebar';

class SearchAlgorithms extends Component {

  render() {

    return (
      <div>
        <Sidebar {...this.props} />
        <section className="grid-section">
          <SearchButtons {...this.props} />
          <Grid {...this.props} />
        </section>
      </div>
    );
  }
}

export default SearchAlgorithms;
