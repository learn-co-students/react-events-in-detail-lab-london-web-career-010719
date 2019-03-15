import React, {Component} from 'react'

export default class CoordinatesButton extends Component {


    handleClick = (event) => {
        let arr = []
        arr[0] = event.clientX
        arr[1] = event.clientY
        this.props.onReceiveCoordinates(arr)
    };

    render() {
        return(
            <button onClick={this.handleClick}></button>
        );
    };
};