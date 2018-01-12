import React from 'react';
import { Col } from 'react-bootstrap';

import './heapSort.css';

class HeapSort extends React.Component {

  render() {
    const { heapSortArray, heapTreeTop, heapTreeRow2, heapTreeRow3, heapTreeRow4, heapTreeArray, heapFinalSort } = this.props.sort;
    const hideCell =  "heap-sort-box-level-0 heap-hidden";
    heapTreeTop[5] = heapTreeArray[0], heapTreeRow2[2] = heapTreeArray[1],
    heapTreeRow2[8] = heapTreeArray[2], heapTreeRow3[1] = heapTreeArray[3],
    heapTreeRow3[3] = heapTreeArray[4], heapTreeRow3[7] = heapTreeArray[5],
    heapTreeRow3[9] = heapTreeArray[6], heapTreeRow4[0] = heapTreeArray[7],
    heapTreeRow4[1] = heapTreeArray[8], heapTreeRow4[3] = heapTreeArray[9];

    return (
      <div className="heap-sort-area">
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapSortArray.map((number, index) => {
              var classVar = heapFinalSort ? "sorted" : "unsorted";
              return <Col xs={ 1 } key={ index } className={number > -1 ? `heap-sort-box-level-0 heap-${classVar}` : hideCell }>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeTop.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-top" : hideCell }>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow2.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-second" : hideCell }>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow3.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-third" : hideCell }>{ number }</Col>
          })}
        </Col>
        <Col xs={ 8 } xsOffset={ 2 } className="heap-sort-box-area">
          { heapTreeRow4.map((number, index) => {
              return <Col xs={ 1 } key={ index } className={number > -1 ? "heap-sort-box-level-0 heap-fourth" : hideCell }>{ number }</Col>
          })}
        </Col>
      </div>
    )
  }
}

export default HeapSort;
