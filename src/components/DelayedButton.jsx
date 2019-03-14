// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  state = {  }

  yaaayFunctions = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() { 
    return ( 
      <button onClick={this.yaaayFunctions}>delay</button>
     );
  }
}
 
export default DelayedButton;