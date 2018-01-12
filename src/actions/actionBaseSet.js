export function searchBaseState() {
  return {
    type: 'SEARCH_BASE_STATE'
  }
}

export function sortBaseState() {
  return {
    type: 'SORT_BASE_STATE'
  }
}

export function togglePlayPause(isRunning, paused) {
  return {
    type: 'TOGGLE_PLAY_PAUSE',
    isRunning: isRunning,
    paused: paused
  }
}

export function changeSpeed(speed, ...timeouts) {
  // unkown number of timeouts cleared, since different for search/sort algorithm pages
  // pass timeouts spread, then iterate over each and clear
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}
