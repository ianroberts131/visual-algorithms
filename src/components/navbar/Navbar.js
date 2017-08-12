import React, { Component } from 'react';
import { Link } from 'react-router';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Visual Algorithms</Link>
        </h5>
      </div>
    )
  }
}

export default Navbar;
