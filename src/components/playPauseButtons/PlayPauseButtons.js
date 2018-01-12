import React from 'react';

import './playPauseButtons.css';

var classNames = require('classnames');

class PlayPauseButtons extends React.Component {
  render() {
    var sortIsPaused = this.props.sort.paused;
    var isSorted = this.props.sort.isSorted;
    var sortIterations = this.props.sort.iterations;

    var searchIsPaused = this.props.search.paused;
    var targetFound = this.props.search.targetFound;
    var searchIterations = this.props.search.iterations;

    if (this.props.location.pathname === '/sort') {
      var playButtonClass = classNames({
        'play' : true,
        'hide' : !sortIsPaused && sortIterations > 0 && !isSorted,
        'disabled' : sortIterations === 0 || isSorted
      });

      var pauseButtonClass = classNames({
        'pause' : true,
        'hide' : sortIsPaused || sortIterations === 0 || isSorted,
        'disabled' : isSorted
      });
    } else if (this.props.location.pathname === '/search') {
      playButtonClass = classNames({
        'play' : true,
        'hide' : !searchIsPaused && searchIterations > 0 && !targetFound,
        'disabled' : searchIterations === 0 || targetFound
      });

      pauseButtonClass = classNames({
        'pause' : true,
        'hide' : searchIsPaused || searchIterations === 0 || targetFound,
        'disabled' : targetFound
      });
    }

    return (
      <div className="play-pause-area">
        <div onClick={ () => this.props.togglePlayPause(true, false) } className={ playButtonClass }></div>
        <div onClick={ () => this.props.togglePlayPause(false, true) } className={ pauseButtonClass }></div>
      </div>
    )
  }
}


export default PlayPauseButtons;
