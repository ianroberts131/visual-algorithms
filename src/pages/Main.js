import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;
