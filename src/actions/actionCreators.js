//function binarySearch() {
//  binaryTimeout = setTimeout(() => {
//    low = this.state.low;
//    high = this.state.high;
//    iterations ++;
//    mid = Math.floor((low + high) / 2);
//    this.setState({ 
//      low: low,
//      high: high,
//      target: mid,
//      testItem: mid,
//      index: mid,
//      iterations: iterations
//    });
//
//    if (searchArray[this.state.testItem] !== this.state.searchNumber && this.state.isRunning === true) {
//      if (this.state.searchNumber < searchArray[this.state.testItem]) {
//          high = mid;
//      } else {
//          low = mid;
//      }
//      mid = Math.floor((low + high) / 2);
//      this.setState({ high: high, low: low, testItem: mid });
//      this.binarySearch();
//    } else {
//      this.setState({ target: mid, targetFound: true, isRunning: false});
//    }
//  }, this.state.intervalSpeed);
//
//}

function binarySearch(searchArray, searchNumber, low, high, iterations, isRunning) {
  iterations += 1;
  isRunning = true;
  
  var mid = Math.floor((low + high) / 2);
  
  var testItem = mid;
  
  if (searchArray[testItem] !== searchNumber && isRunning) {
    searchNumber < searchArray[testItem] ? high = mid : low = mid;
    mid = Math.floor((low + high) / 2);
    testItem = mid;
  } else {
    var targetFound = true;
    var target = mid;
    isRunning = false;
  }
  
  return {
    type: 'START_BINARY',
    searchArray: searchArray,
    searchNumber: searchNumber,
    low: low,
    high: high,
    mid: mid,
    testItem: testItem,
    iterations: iterations,
    isRunning: isRunning,
    targetFound: targetFound,
    target: target
  }
  
}


// Binary Search Action Creator
export function startBinary(searchArray, searchNumber, low, high, iterations, isRunning, speed) {
  return dispatch => {
    setTimeout(() => {
      dispatch(binarySearch(searchArray, searchNumber, low, high, iterations, isRunning))
    }, 1000)
  }
}

// change speed
export function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}






