import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

var searchArray = randomlyGenerateArray(400);

var iterations;
var low;
var high;
var mid;

class App extends Component {
  constructor(){
    super();
    this.state = { 
      index: "",
      low: 0,
      high: searchArray.length - 1,
      mid: "",
      target: "",
      targetFound: false,
      iterations: 0,
      searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)]
    }
  }
  
  
  binarySearch() {
    
    setTimeout(() => {
      low = this.state.low;
      high = this.state.high;
      iterations ++;
      mid = Math.floor((low + high) / 2);
      
      this.setState({ 
        low: low,
        high: high,
        target: mid,
        mid: mid,
        index: mid,
        iterations: iterations 
      });
      
      if (searchArray[mid] !== this.state.searchNumber) {
        if (this.state.searchNumber < searchArray[mid]) {
            high = mid;
        } else {
            low = mid;
        }
        mid = Math.floor((low + high) / 2);
        this.setState({ high: high, low: low, mid: mid });
        this.binarySearch();
      } else {
        this.setState({ target: mid, targetFound: true});
      }
    }, 1000)
  }
  
  clearSearch() {
    searchArray = randomlyGenerateArray(400);
    this.setState({ 
      low: 0,
      high: searchArray.length - 1,
      mid: "",
      iterations: 0,
      targetFound: false,
      searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)]
    });
    iterations = 0;
  }
  
  startBinarySearch() {
    this.clearSearch();
    this.binarySearch();
  }
  
  render() {
    return (
      <div>
        <h1 id="header">Search Algorithms</h1>
        <section className="side-bar">
          <div className="side-bar-elements">
            <button className='binary-search-button' onClick={ this.startBinarySearch.bind(this) }>Start Binary Search</button>
            <p>The target item is { this.state.searchNumber }</p>
            <p>Iterations: { this.state.iterations }</p>
            <p>The min index is: { this.state.low }</p>
            <p>The max index is: { this.state.high }</p>
            <p>Item located at index: { this.state.index }</p>
          </div>
        </section>
        <section className="grid-section">
          <div className="grid">
            { searchArray.map((number, index) => {
              var inSearchArea = index >= this.state.low && index <= this.state.high;
              var isMidItem = index === this.state.mid && this.state.targetFound === false;
              var isHighOrLow = index === this.state.low || index === this.state.high;
              var isTargetItem = index === this.state.target && this.state.targetFound === true;
              if (this.state.targetFound === false) {
                if (!inSearchArea) {
                  return <div className="grid-item not-in-remaining-elements">{ number }</div>;
                } else if (isHighOrLow) {
                  return <div className="grid-item high-or-low-element">{ number }</div>;
                } else if (isMidItem) {
                  return <div className="grid-item target-element">{ number }</div>;
                } else {
                  return <div className="grid-item in-remaining-elements">{ number }</div>;
                }
              } else {
                  if (isTargetItem) {
                    return <div className="grid-item target-element">{ number }</div>;
                  } else {
                    return <div className="grid-item not-in-remaining-elements">{ number }</div>;
                  }
              }
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
