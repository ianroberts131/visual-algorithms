import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../css/App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <h5 id="nav-title">
            <Link className="link" to="/">Visual Algorithms</Link>
          </h5>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;