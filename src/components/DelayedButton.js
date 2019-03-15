import React, {Component} from 'react'

export default class DelayedButton extends Component {

    eventHandler = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event))
    };


    render() {
        return(
            <button onClick={this.eventHandler} ></button>
        );
    };
};