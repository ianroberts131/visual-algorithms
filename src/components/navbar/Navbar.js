import React, { Component } from 'react';
import { Link } from 'react-router';
import './navbar.css';
import { selectAlgoGroup } from '../../helpers'

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Visual Algorithms</Link>
        </h5>
        <div className="tabs">
          <Link className="link" to="/search">
            <button className="tab" id="search-tab" onClick={ (e) => selectAlgoGroup(e) }>Search</button>
          </Link>
          <Link className="link" to="/sort">
            <button className="tab" id="sort-tab" onClick={ (e) => selectAlgoGroup(e) }>Sort</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
