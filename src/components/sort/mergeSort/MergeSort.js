import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './mergeSort.css';

class MergeSort extends React.Component {
  render() {
    const { mergeArray, mergeArrayMain, mergeArrayLeft1, mergeArrayLeft2, mergeArrayLeft3, mergeArrayLeft4, mergeArrayLeft5, mergeArrayLeft6, mergeArrayLeft7, mergeArrayRight1, mergeArrayRight2, mergeArrayRight3, mergeArrayRight4, mergeArrayRight5, mergeArrayRight6, mergeArrayRight7 } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;
    return (
      <div>
        <div className="merge-sort-box-area">
          { mergeArrayMain.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-1-0">
          { mergeArrayLeft1.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-1-1">
          { mergeArrayRight1.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-0">
          { mergeArrayLeft2.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-1">
          { mergeArrayLeft3.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-2">
          { mergeArrayRight2.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-3">
          { mergeArrayRight3.map((number, index) => {
              return <div key={ index } className="merge-sort-box merge-unsorted">{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-3-0">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayLeft4 }</div>
        </div>
        <div className="merge-sort-box-area level-3-1">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayLeft5 }</div>
        </div>
        <div className="merge-sort-box-area level-3-2">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayLeft6 }</div>
        </div>
        <div className="merge-sort-box-area level-3-3">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayLeft7 }</div>
        </div>
        <div className="merge-sort-box-area level-3-4">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayRight4 }</div>
        </div>
        <div className="merge-sort-box-area level-3-5">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayRight5 }</div>
        </div>
        <div className="merge-sort-box-area level-3-6">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayRight6 }</div>
        </div>
        <div className="merge-sort-box-area level-3-7">
          <div className="merge-sort-box merge-unsorted">{ mergeArrayRight7 }</div>
        </div>
      </div>
    )
  }
}

export default MergeSort;
