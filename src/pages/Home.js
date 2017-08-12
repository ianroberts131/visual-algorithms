import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 id="home-header">Visual Algorithms</h1>
        <h3 id="home-description">Bringing common computer science algorithms to life</h3>
        <div id="algo-boxes">
          <div className='algo-item'>
            <Link className="link" to="/search">
              <h3>Searching Algorithms</h3>
              <img className='algo-img' src={require('../images/search-img.jpg')} alt="Searching Algorithm"></img>
            </Link>
          </div>
          <div className='algo-item'>
            <h3>Sorting Algorithms (Coming Soon)</h3>
            <img className='algo-img' src={require('../images/sort-img.jpg')} alt="Sorting Algorithm"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
