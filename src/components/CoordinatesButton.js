// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button onClick={this.props.onReceiveCoordinates}>
        Coordinates Button
      </button>
    );
  }
}
