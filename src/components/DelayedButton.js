// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={this.props.onDelayedClick}>Hello!</button>;
  }
}
