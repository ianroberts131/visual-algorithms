import React from 'react';
import { Link } from 'react-router';

var classNames = require('classnames');

class SearchButtons extends React.Component {

  render() {
    
    const { startSequentialSearch, searchAlgorithm, clickSlowButton, clickRegularButton, clickFastButton } = this.props;
    
    const { searchArray, searchNumber, low, high, testItem, iterations, isRunning, targetFound, target } = this.props.search;
    
    const { intervalSpeed, speed, regularActive, slowActive, fastActive } = this.props.speed;
    
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
    
    var binaryTimeout;
    
    if (targetFound === false && isRunning) {
      binaryTimeout = setTimeout (() => {
      this.props.binarySearch(searchArray, searchNumber, low, high, iterations);
      }, intervalSpeed);
    }
     
    return (
      <div className="buttons">
        <Link to={`/search/sequential-search/${speed}`}>
          <button className='button-size sequential-search-button' onClick={ startSequentialSearch }>Sequential Search</button>
        </Link>
        <Link to={`/search/binary-search/${speed}`}>
          <button className='button-size binary-search-button' onClick={ () => this.props.startBinarySearch(binaryTimeout) }>Binary Search</button>
        </Link>
        <div className="speed-buttons">
          <Link to={`/search/${searchAlgorithm.url}/slow`}>
            <button className={ slowSpeedClass } onClick={ () => this.props.changeSpeed('slow') }>Slow</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/regular`}>
            <button className={ regularSpeedClass } onClick={ () => this.props.changeSpeed('regular') }>Regular</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/fast`}>
            <button className={ fastSpeedClass } onClick={ () => this.props.changeSpeed('fast') }>Fast</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchButtons;