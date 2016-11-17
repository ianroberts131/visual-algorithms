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

class App extends Component {
  constructor(){
    super();
    this.state = { 
      index: "",
      low: 0,
      high: searchArray.length - 1,
      iterations: 0,
      searchNumber: 8
    }
  }
  
  myLoop = () => {
    var iterations = this.state.iterations;
    var low = this.state.low;
    setTimeout(() => {
      var high = searchArray.length - 1;
      var mid;
      this.setState({ low: low, high: high });

      iterations ++;
      this.setState({ iterations: iterations });
      mid = Math.floor((low + high) / 2);
      this.setState({ index: mid })
      if (searchArray[mid] !== this.state.searchNumber) {
        if (this.state.searchNumber < searchArray[mid]) {
            high = mid;
        } else {
            low = mid;
        }
        this.setState({ high: high, low: low })
        this.myLoop();
      }
    }, 1000)
  }
  
  render() {
    return (
      <div>
        <button onClick = { this.myLoop.bind(this) }>Start Binary Search</button>
        <p>The search array is {formattedArray(searchArray)}</p>
        <p>The item we are looking for is { this.state.searchNumber }</p>
        <p>The item was located at array index: { this.state.index }</p>
        <p>Iterations: { this.state.iterations }</p>
        <p>The low index is { this.state.low }</p>
        <p>The high index is { this.state.high }</p>
      </div>
    );
  }
}

export default App;
