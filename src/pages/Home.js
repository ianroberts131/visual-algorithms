import React, { Component } from 'react';
import { Link } from 'react-router';
import { selectAlgoGroup } from '../helpers'

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
              <img className='search-img' src={require('../images/search-img.jpg')} alt="Searching Algorithm" onClick={ (e) => selectAlgoGroup(e) }></img>
            </Link>
          </div>
          <div className='algo-item'>
            <Link className="link" to="/sort">
              <h3>Sorting Algorithms</h3>
              <img className='sort-img' src={require('../images/sort-img.jpg')} alt="Sorting Algorithm" onClick={ (e) => selectAlgoGroup(e) }></img>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
