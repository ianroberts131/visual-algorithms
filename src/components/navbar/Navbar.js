import React, { Component } from 'react';
import { Link } from 'react-router';
import './navbar.css';
import { selectAlgoGroup } from '../../helpers'
var classNames = require('classnames');

class Navbar extends Component {

  render() {
    var searchTabClass = classNames({
      'tab-selected' : this.props.location.pathname === '/search',
      'tab' : true
    });

    var sortTabClass = classNames({
      'tab-selected' : this.props.location.pathname === '/sort',
      'tab' : true
    });

    return (
      <div className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Visual Algorithms</Link>
        </h5>
        <div className="tabs">
          <Link className="link" to="/search">
            <button className={ searchTabClass } id="search-tab" onClick={ (e) => {
                this.props.searchBaseState();
                this.props.changeSpeed('regular');
              }
            }>Search</button>
          </Link>
          <Link className="link" to="/sort">
            <button className={ sortTabClass } id="sort-tab" onClick={ (e) => {
                this.props.sortBaseState();
                this.props.changeSpeed('regular');
              }
            }>Sort</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
