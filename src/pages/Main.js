import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Grid, Row } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <Grid fluid={ true }>
        <Row className="navbar-row">
          <Navbar {...this.props}/>
        </Row>
          { React.cloneElement(this.props.children, this.props) }
      </Grid>
    )
  }
}

export default Main;
