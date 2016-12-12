import React from 'react';
import { Link } from 'react-router';

class SearchButtons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Link to={`/search/sequential-search/${this.props.speed}`}>
          <button className='button-size sequential-search-button' onClick={ this.props.startSequentialSearch }>Sequential Search</button>
        </Link>
        <Link to={`/search/binary-search/${this.props.speed}`}>
          <button className='button-size binary-search-button' onClick={ this.props.startBinarySearch }>Binary Search</button>
        </Link>
          <div className="speed-buttons">
          <Link to={`/search/${this.props.searchAlgorithm.url}/slow`}>
            <button className={ this.props.slowSpeedClass } onClick={ this.props.clickSlowButton }>Slow</button>
          </Link>
          <Link to={`/search/${this.props.searchAlgorithm.url}/regular`}>
            <button className={ this.props.regularSpeedClass } onClick={ this.props.clickRegularButton }>Regular</button>
          </Link>
          <Link to={`/search/${this.props.searchAlgorithm.url}/fast`}>
            <button className={ this.props.fastSpeedClass } onClick={ this.props.clickFastButton }>Fast</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchButtons;