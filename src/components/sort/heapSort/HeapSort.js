import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Col } from 'react-bootstrap';

import './heapSort.css';


class HeapSort extends React.Component {
  render() {
    const { sortArray, heapArrayLeft1, heapArrayLeft2, heapArrayLeft3, heapArrayLeft4, finishBuildHeap, heapFinalSort, startHeapBuild } = this.props.sort;
    const { intervalSpeed, speedString } = this.props.speed;
    return (
      <div className="heap-sort-area">
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { sortArray.map((number, index) => {
              var classVar = heapFinalSort ? "sorted" : "unsorted";
              return <Col xs={ 1 } key={ index } className={number > -1 ? `heap-sort-box-level-0 heap-${classVar}` : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapArrayLeft1.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-top" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapArrayLeft2.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-second" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapArrayLeft3.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-third" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapArrayLeft4.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-fourth" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
      </div>
    )
  }
}

export default HeapSort;
