import React from 'react';
import { Col } from 'react-bootstrap';

import './heapSort.css';

class HeapSort extends React.Component {
  render() {
    const { heapSortArray, heapTreeTop, heapTreeRow2, heapTreeRow3, heapTreeRow4, heapFinalSort } = this.props.sort;
    //const { intervalSpeed, speedString } = this.props.speed;
    return (
      <div className="heap-sort-area">
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapSortArray.map((number, index) => {
              var classVar = heapFinalSort ? "sorted" : "unsorted";
              return <Col xs={ 1 } key={ index } className={number > -1 ? `heap-sort-box-level-0 heap-${classVar}` : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeTop.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-top" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow2.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-second" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow3.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-third" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow4.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-fourth" : "heap-sort-box-level-0 heap-hidden"}>{ number }</Col>
          })}
        </Col>
      </div>
    )
  }
}

export default HeapSort;
