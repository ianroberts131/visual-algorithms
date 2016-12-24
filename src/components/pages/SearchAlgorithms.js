import React, { Component } from 'react';
import Grid from '../Grid';
import SearchButtons from '../SearchButtons';
import Sidebar from '../Sidebar';

import '../../css/App.css';

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

