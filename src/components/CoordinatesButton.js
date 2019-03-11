import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const [x, y] = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates([x, y])

    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}