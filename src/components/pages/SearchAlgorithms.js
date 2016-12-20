import React, { Component } from 'react';
import Grid from '../Grid';
import SearchButtons from '../SearchButtons';

import '../../css/App.css';
import { randomlyGenerateArray } from '../../helpers';

var classNames = require('classnames');

var searchArray = randomlyGenerateArray(400);

var iterations, low, high, mid, testItem, binaryTimeout, sequentialTimeout;

var binarySearch = {
  name: "Binary Search",
  url: "binary-search",
  description: "A search algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful."
}

var sequentialSearch = {
  name: "Sequential Search",
  url: "sequential-search",
  description: "A search algorithm that finds the position of a target value within a sorted array. It sequentially checks each element of the list for the target value until a match is found or until all the elements have been searched."
}


class SearchAlgorithms extends Component {
  constructor(){
    super();
    this.sequentialSearch = this.sequentialSearch.bind(this);
    this.binarySearch = this.binarySearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.startBinarySearch = this.startBinarySearch.bind(this);
    this.startSequentialSearch = this.startSequentialSearch.bind(this);
    this.clickSlowButton = this.clickSlowButton.bind(this);
    this.clickRegularButton = this.clickRegularButton.bind(this);
    this.clickFastButton = this.clickFastButton.bind(this);
    this.state = { 
      index: "",
      low: 0,
      high: searchArray.length - 1,
      testItem: "",
      target: "",
      targetFound: false,
      iterations: 0,
      searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)],
      searchAlgorithm: binarySearch,
      speed: "regular",
      regularActive: true,
      slowActive: false,
      fastActive: false,
      intervalSpeed: 1000,
      isRunning: false
    }
  }
  
  sequentialSearch() {
    if (iterations === 0 ) {
        testItem = 0;
    }

    sequentialTimeout = setTimeout(() => {
      low = this.state.low;
      high = this.state.high;
      testItem = this.state.testItem;
      iterations ++;
      this.setState({
        low: low,
        high: high,
        index: testItem,
        testItem: testItem,
        iterations: iterations
      });
      
      if (searchArray[this.state.testItem] !== this.state.searchNumber && this.state.isRunning === true) {
        low ++;
        testItem ++;
        this.setState({ low: low, testItem: testItem, index: testItem });
        this.sequentialSearch();
      } else {
        this.setState({ target: testItem, high: testItem, targetFound: true, isRunning: false});
      }
    }, this.state.intervalSpeed);
  }
  
  binarySearch() {
    binaryTimeout = setTimeout(() => {
      low = this.state.low;
      high = this.state.high;
      iterations ++;
      mid = Math.floor((low + high) / 2);
      this.setState({ 
        low: low,
        high: high,
        target: mid,
        testItem: mid,
        index: mid,
        iterations: iterations
      });
      
      if (searchArray[this.state.testItem] !== this.state.searchNumber && this.state.isRunning === true) {
        if (this.state.searchNumber < searchArray[this.state.testItem]) {
            high = mid;
        } else {
            low = mid;
        }
        mid = Math.floor((low + high) / 2);
        this.setState({ high: high, low: low, testItem: mid });
        this.binarySearch();
      } else {
        this.setState({ target: mid, targetFound: true, isRunning: false});
      }
    }, this.state.intervalSpeed);
    
  }
  
  clearSearch() {
    searchArray = randomlyGenerateArray(400);
    this.setState({ 
      low: 0,
      high: searchArray.length - 1,
      testItem: "",
      iterations: 0,
      targetFound: false,
      searchNumber: searchArray[Math.floor((Math.random() * 400) + 1)],
      isRunning: false
    });
    iterations = 0;
    clearTimeout(binaryTimeout);
    clearTimeout(sequentialTimeout);
  }
  
  startBinarySearch() {
    this.clearSearch();
    this.setState({ isRunning: true, searchAlgorithm: binarySearch });
    this.binarySearch();
  }
  
  startSequentialSearch() {
    this.clearSearch();
    this.setState({ isRunning: true, searchAlgorithm: sequentialSearch });
    this.sequentialSearch();
  }
  
  clickRegularButton() {
    if (this.state.regularActive === false) {
      this.setState({ 
        speed: "regular",
        regularActive: true,
        slowActive: false,
        fastActive: false,
        intervalSpeed: 1000
      });
    }
  }
  
 clickSlowButton() {
    if (this.state.slowActive === false) {
      this.setState({ 
        speed: "slow",
        slowActive: true,
        regularActive: false,
        fastActive: false,
        intervalSpeed: 2000
      });
    }
  }
  
  clickFastButton() {
    if (this.state.fastActive === false) {
      this.setState({ 
        speed: "fast",
        fastActive: true,
        regularActive: false,
        slowActive: false,
        intervalSpeed: 200
      });
    }
  }
   
  render() {
    var regularSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': this.state.regularActive
    });
    
    var slowSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': this.state.slowActive
    });
    
    var fastSpeedClass = classNames({
      'button-size': true,
      'speed-button': true,
      'active-btn': this.state.fastActive
    });
    
    
    return (
      <div>
        <section className="side-bar-section">
          <div className="algorithm-info">
            <p id="algorithm-name"><strong>Algorithm: </strong>{ this.state.searchAlgorithm.name }</p>
            <p id="description">Description: { this.state.searchAlgorithm.description }</p>
          </div>
          <div className="iteration-info-container">
            <div className="iteration-info">
              <p className="iteration-info-item">Target Item <span>{ this.state.searchNumber }</span></p>
              <p className="iteration-info-item">Iterations <span>{ this.state.iterations }</span></p>
              <p className="iteration-info-item">Minimum index <span>{ this.state.low }</span></p>
              <p className="iteration-info-item">Maximum index <span>{ this.state.high }</span></p>
              <p className="iteration-info-item">Item located at index <span>{ this.state.index }</span></p>
            </div>
          </div>
        </section>
        <section className="grid-section">
          <SearchButtons
            {...this.props}
            startSequentialSearch={this.startSequentialSearch}
            startBinarySearch={this.startBinarySearch}
            clickSlowButton={this.clickSlowButton}
            clickRegularButton={this.clickRegularButton}
            clickFastButton={this.clickFastButton}
            slowSpeedClass={slowSpeedClass}
            regularSpeedClass={regularSpeedClass}
            fastSpeedClass={fastSpeedClass}
            searchAlgorithm={this.state.searchAlgorithm}
            speed={this.state.speed}
          />
          <Grid
            {...this.props}
            searchArray={searchArray}
            low={this.state.low}
            high={this.state.high}
            testItem={this.state.testItem}
            target={this.state.target}
            targetFound={this.state.targetFound}
          />
        </section>
      </div>
    );
  }
}

export default SearchAlgorithms;
