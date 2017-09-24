import React from 'react';

import './mergeSort.css';

class MergeSort extends React.Component {
  render() {
    const { mergeArrayMain, mergeArrayLeft1, mergeArrayLeft2, mergeArrayLeft3, mergeArrayLeft4, mergeArrayLeft5, mergeArrayLeft6, mergeArrayLeft7, mergeArrayRight1, mergeArrayRight2, mergeArrayRight3, mergeArrayRight4, mergeArrayRight5, mergeArrayRight6, mergeArrayRight7, mergeFinalSort } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;
    return (
      <div>
        <div className="merge-sort-box-area">
          { mergeArrayMain.map((number, index) => {
              var classVar = mergeFinalSort ? "sorted" : "unsorted";
              return <div key={ index } className={number > -1 ? `merge-sort-box-level-0 merge-${classVar}` : "merge-sort-box-level-0 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-1-0">
          { mergeArrayLeft1.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-1 merge-unsorted" : "merge-sort-box-level-1 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-1-1">
          { mergeArrayRight1.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-1 merge-unsorted" : "merge-sort-box-level-1 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-0">
          { mergeArrayLeft2.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-2 merge-unsorted" : "merge-sort-box-level-2 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-1">
          { mergeArrayLeft3.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-2 merge-unsorted" : "merge-sort-box-level-2 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-2">
          { mergeArrayRight2.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-2 merge-unsorted" : "merge-sort-box-level-2 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-2-3">
          { mergeArrayRight3.map((number, index) => {
              return <div key={ index } className={number > -1 ? "merge-sort-box-level-2 merge-unsorted" : "merge-sort-box-level-2 merge-hidden"}>{ number }</div>
          })}
        </div>
        <div className="merge-sort-box-area level-3-0">
          <div className={mergeArrayLeft4 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayLeft4 }</div>
        </div>
        <div className="merge-sort-box-area level-3-1">
          <div className={mergeArrayLeft5 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayLeft5 }</div>
        </div>
        <div className="merge-sort-box-area level-3-2">
          <div className={mergeArrayLeft6 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayLeft6 }</div>
        </div>
        <div className="merge-sort-box-area level-3-3">
          <div className={mergeArrayLeft7 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayLeft7 }</div>
        </div>
        <div className="merge-sort-box-area level-3-4">
          <div className={mergeArrayRight4 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayRight4 }</div>
        </div>
        <div className="merge-sort-box-area level-3-5">
          <div className={mergeArrayRight5 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayRight5 }</div>
        </div>
        <div className="merge-sort-box-area level-3-6">
          <div className={mergeArrayRight6 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayRight6 }</div>
        </div>
        <div className="merge-sort-box-area level-3-7">
          <div className={mergeArrayRight7 > -1 ? "merge-sort-box-level-3 merge-unsorted" : "merge-sort-box-level-3 merge-hidden"}>{ mergeArrayRight7 }</div>
        </div>
      </div>
    )
  }
}

export default MergeSort;
