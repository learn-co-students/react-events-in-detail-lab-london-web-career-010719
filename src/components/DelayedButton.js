// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  handleOnClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleOnClick}>Delayed Button</button>;
  }
}
 
export default DelayedButton;