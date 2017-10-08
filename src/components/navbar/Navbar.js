import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

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
      <Col sm={ 12 } className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Visual Algorithms</Link>
        </h5>
        <div className="tabs">
          <Link className="link" to="/search">
            <button className={ searchTabClass } id="search-tab" onClick={ (e) => {
                if (this.props.location.pathname !== '/search') {
                  this.props.searchBaseState();
                  this.props.changeSpeed('regular');
                }
              }
            }>Search</button>
          </Link>
          <Link className="link" to="/sort">
            <button className={ sortTabClass } id="sort-tab" onClick={ (e) => {
                if (this.props.location.pathname !== '/sort') {
                  this.props.sortBaseState();
                  this.props.changeSpeed('regular');
                }
              }
            }>Sort</button>
          </Link>
        </div>
      </Col>
    )
  }
}

export default Navbar;
