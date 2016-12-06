import React from 'react';

class SearchButtons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button className='button-size sequential-search-button' onClick={ this.props.startSequentialSearch }>Sequential Search</button>
        <button className='button-size binary-search-button' onClick={ this.props.startBinarySearch }>Binary Search</button>
        <div className="speed-buttons">
          <button className={ this.props.slowSpeedClass } onClick={ this.props.clickSlowButton }>Slow</button>
          <button className={ this.props.regularSpeedClass } onClick={ this.props.clickRegularButton }>Regular</button>
          <button className={ this.props.fastSpeedClass } onClick={ this.props.clickFastButton }>Fast</button>
        </div>
      </div>
    )
  }
}

export default SearchButtons;