import React, { Component } from 'react';
import { Link } from 'react-router';
import './navbar.css';
import { selectAlgoGroup } from '../../helpers'

class Navbar extends Component {

  render() {

    const { changeTab } = this.props.tabControl;

    return (
      <div className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Visual Algorithms</Link>
        </h5>
        <div className="tabs">
          <Link className="link" to="/search">
            <button className="tab" id="search-tab" onClick={ (e) => {
                selectAlgoGroup(e);
                this.props.switchToSearchTab();
                this.props.searchBaseState();
              }
            }>Search</button>
          </Link>
          <Link className="link" to="/sort">
            <button className="tab" id="sort-tab" onClick={ (e) => {
                selectAlgoGroup(e);
                this.props.switchToSortTab();
                this.props.sortBaseState();
              }
            }>Sort</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
