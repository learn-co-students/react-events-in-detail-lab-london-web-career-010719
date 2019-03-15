// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
   

     handleClick= (event) =>{
        let array =[event.clientX, event.clientY]
         return this.props.onReceiveCoordinates(array)
     }
    render() { 
        return ( <button onClick={this.handleClick}>CoordinatesButton</button> );
    }
}
 
export default CoordinatesButton;
