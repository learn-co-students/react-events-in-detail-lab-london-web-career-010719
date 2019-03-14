// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  state = {  }


  coordinatesProducer = (x, y) => {
    this.props.onReceiveCoordinates([x,y])
  }

  // coordinatesProducer = (event) => {
  //   this.props.onReceiveCoordinates([event.clientX, event.clientY])
  // }

  render() { 
    return ( 
      <div>
        {/* <button onClick={this.coordinatesProducer}>Button</button> */}
        <button onClick={event => this.coordinatesProducer(event.clientX, event.clientY)}>Button</button>
        {/* <button onClick={this.coordinatesProducer}>Button</button>
        <button onClick={event => this.coordinatesProducer(event)}>Button</button> */}
      </div>
     );
  }
}
 
export default CoordinatesButton;