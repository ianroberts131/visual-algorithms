import React from 'react';
import { Link } from 'react-router';

class SearchButtons extends React.Component {
  render() {
    const { speed, startSequentialSearch, startBinarySearch, searchAlgorithm, slowSpeedClass, regularSpeedClass, fastSpeedClass, clickSlowButton, clickRegularButton, clickFastButton, searchArray, searchNumber, low, high, testItem, iterations, isRunning, targetFound, target } = this.props;
    return (
      <div className="buttons">
        <Link to={`/search/sequential-search/${speed}`}>
          <button className='button-size sequential-search-button' onClick={ startSequentialSearch }>Sequential Search</button>
        </Link>
        <Link to={`/search/binary-search/${speed}`}>
          <button className='button-size binary-search-button' onClick={ startBinarySearch }>Binary Search</button>
        </Link>
        {/*<Link to={`/search/binary-search/${speed}`}>
          <button className='button-size binary-search-button' onClick={ this.props.startBinary(searchArray, searchNumber, low, high) }>Binary Search Redux</button>
        </Link>*/}
          <div className="speed-buttons">
          <Link to={`/search/${searchAlgorithm.url}/slow`}>
            <button className={ slowSpeedClass } onClick={ clickSlowButton }>Slow</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/regular`}>
            <button className={ regularSpeedClass } onClick={ clickRegularButton }>Regular</button>
          </Link>
          <Link to={`/search/${searchAlgorithm.url}/fast`}>
            <button className={ fastSpeedClass } onClick={ clickFastButton }>Fast</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchButtons;