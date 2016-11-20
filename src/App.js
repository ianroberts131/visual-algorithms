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
      searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)],
      searchAlgorithm: "Binary Search"
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
        <div className="nav-bar">
          <h5 id="nav-title">Visual Algorithms</h5>
        </div>
        <section className="side-bar-section">
          <div className="algorithm-info">
            <p id="algorithm-name"><strong>Algorithm: </strong>{ this.state.searchAlgorithm }</p>
            <p id="description">Description: A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.</p>
          </div>
          <div className="iteration-info-container">
            <div className="iteration-info">
              <p className="iteration-info-item">Target Item <span id="target-item"> { this.state.searchNumber }</span></p>
              <p className="iteration-info-item">Iterations <span id="iterations">{ this.state.iterations }</span></p>
              <p className="iteration-info-item">Minimum index <span id="min-index">{ this.state.low }</span></p>
              <p className="iteration-info-item">Maximum index <span id="max-index">{ this.state.high }</span></p>
              <p className="iteration-info-item">Item located at index <span id="found-item">{ this.state.index }</span></p>
            </div>
          </div>
        </section>
        <section className="grid-section">
          <div className="buttons">
            <button className='button-size sequential-search-button'>Sequential Search</button>
            <button className='button-size binary-search-button' onClick={ this.startBinarySearch.bind(this) }>Binary Search</button>
            <div className="speed-buttons">
              <button className='button-size slow-button'>Slow</button>
              <button className='button-size regular-button'>Regular</button>
              <button className='button-size fast-button'>Fast</button>
            </div>
          </div>
          <div className="grid-container">
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
          </div>
        </section>
      </div>
    );
  }
}

export default App;

