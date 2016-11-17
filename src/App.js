import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var formattedArray = (array) => {
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

var randomlyGenerateArray = (size) => {
  var array = [];
  while (array.length < size) {
    var newNumber = Math.floor((Math.random() * 1000) + 1);
    if (array.length === 0 || array.indexOf(newNumber) === -1) {
      array.push(newNumber);
    }
  }
  return array.sort(function(a,b){return a - b});
}

var searchArray = randomlyGenerateArray(625);

console.log(searchArray);

class App extends Component {
  constructor(){
    super();
    this.state = { 
      index: "",
      low: 0,
      high: searchArray.length,
      iterations: 0,
      searchNumber: searchArray[Math.floor((Math.random() * 625) + 1)]
    }
  }
  
  binarySearch = () => {
    var iterations = this.state.iterations;
    setTimeout(() => {
      var low = this.state.low;
      var high = this.state.high;
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
        this.binarySearch();
      }
    }, 1000)
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.binarySearch.bind(this) }>Start Binary Search</button>
        <p>The search array is { formattedArray(searchArray) } </p>
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
