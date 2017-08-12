import React from 'react';
import { Link } from 'react-router';

import './searchButtons.css';

var classNames = require('classnames');

class SearchButtons extends React.Component {

  render() {

    const { searchArray, searchNumber, low, high, iterations, isRunning, targetFound, searchAlgorithm } = this.props.search;

    const { intervalSpeed, speedString, regularActive, slowActive, fastActive } = this.props.speed;

    var regularSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': regularActive
    });

    var slowSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': slowActive
    });

    var fastSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': fastActive
    });

    var linearTimeout;
    var binaryTimeout;

    if (targetFound === false && isRunning && searchAlgorithm.name === 'Linear Search') {
      linearTimeout = setTimeout (() => {
      this.props.linearSearch(searchArray, searchNumber, low, high, iterations);
      }, intervalSpeed);
    }

    if (targetFound === false && isRunning && searchAlgorithm.name === 'Binary Search') {
      binaryTimeout = setTimeout (() => {
      this.props.binarySearch(searchArray, searchNumber, low, high, iterations);
      }, intervalSpeed);
    }

    return (
      <div className="buttons">
        <Link to={`/search/linear-search/${speedString}`}>
          <button className='button-size linear-search-button' onClick={ () => this.props.startLinearSearch(binaryTimeout, linearTimeout) }>Linear Search</button>
        </Link>
        <Link to={`/search/binary-search/${speedString}`}>
          <button className='button-size binary-search-button' onClick={ () => this.props.startBinarySearch(binaryTimeout, linearTimeout) }>Binary Search</button>
        </Link>
        <div className="speed-buttons">
          <Link to={`/search/${searchAlgorithm.url}/slow`}>
            <button className={ slowSpeedClass } onClick={ () => this.props.changeSpeed('slow', binaryTimeout, linearTimeout) }>Slow</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/regular`}>
            <button className={ regularSpeedClass } onClick={ () => this.props.changeSpeed('regular', binaryTimeout, linearTimeout) }>Regular</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/fast`}>
            <button className={ fastSpeedClass } onClick={ () => this.props.changeSpeed('fast', binaryTimeout, linearTimeout) }>Fast</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchButtons;
