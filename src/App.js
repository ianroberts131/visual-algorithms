import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var searchArray = [1,2,3,4,5,6,7,8,9];

var formattedArray = function(array) {
  var arrayText = "[ ";
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      arrayText += array[i].toString() + ", ";
    } else {
      arrayText += array[i].toString() + " ";
    }
  }
  arrayText += "]";
  return arrayText;
  
}
  var low;
  var high;
  var mid;
  var searchNumber = 8;
  var iterations = 0;

  var binarySearch = function() {
    low = 0;
    high = searchArray.length - 1;

    while (low <= high) {
      iterations ++;
      mid = Math.floor((low + high) / 2);
      if (searchArray[mid] == searchNumber) {
        break;
      } else {
        if (searchNumber < searchArray[mid]) {
          high = mid;
        } else {
          low = mid;
        }
      }
    }
      return mid;
  }

class App extends Component {
  render() {
    return (
      <div>
        <p>The search array is {formattedArray(searchArray)}</p>
        <p>The item we are looking for is {searchNumber}</p>
        <p>The item was located at array index: {binarySearch()}</p>
        <p>It took {iterations} iterations to find the target item</p>
      </div>
    );
  }
}

export default App;
