import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Row className="home">
        <Col xs={ 12 } id="header-section">
          <h1 id="home-header">Visual Algorithms</h1>
          <h3 id="home-description">Bringing common computer science algorithms to life</h3>
        </Col>
        <Col xs={ 12 } id="algo-boxes">
          <Col xs={ 12 } sm={ 6 } className='algo-item'>
            <Link className="link" to="/search">
              <h3 className="algo-header">Search Algorithms</h3>
              <img className='search-img' src={require('../images/search-img.jpg')} alt="Searching Algorithm" onClick={ (e) => {
                  this.props.searchBaseState();
                  this.props.changeSpeed('regular');
                }
              }></img>
            </Link>
          </Col>
          <Col xs={ 12 } sm={ 6 } className='algo-item'>
            <Link className="link" to="/sort">
              <h3 className="algo-header">Sort Algorithms</h3>
              <img className='sort-img' src={require('../images/sort-img.jpg')} alt="Sorting Algorithm" onClick={ (e) => {
                  this.props.sortBaseState();
                  this.props.changeSpeed('regular');
                }
              }></img>
            </Link>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Home;
