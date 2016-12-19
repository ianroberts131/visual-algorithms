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

function binarySearch(low, high, searchNumber, isRunning, searchArray) {
  var low = low;
  var high = high;
  var iterations = iterations + 1;
  var searchNumber = searchNumber;
  var isRunning = isRunning;
  var searchArray = searchArray;
  
  var mid = Math.floor((low + high) / 2);
  
  var testItem = mid;
  
  if (searchArray[testItem] === searchNumber && isRunning) {
    searchNumber < searchArray[testItem] ? high = mid : low = mid;
    mid = Math.floor((low + high) / 2);
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
export function startBinary(dispatch, searchArray, searchNumber, low, high) {
  var iterations = 0;
  var low = low;
  var high = high;
  var searchNumber = searchNumber
  var searchArray = searchArray;
  var isRunning = true;
  
  setTimeout(() => {
    dispatch(binarySearch(low, high, searchNumber, isRunning, searchArray))
  }, 1000)
}

// change speed
export function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}






