import React, { Component } from 'react'

export default class CoordinatesButton extends Component{

  handleMouseClick = (event) => {
    let coordinates = []
    let x = event.clientX
    let y = event.clientY
    coordinates.push(x, y)
    this.props.onReceiveCoordinates(coordinates)

    // better code: this.props.onReceiveCoordinates([event.clientX, event.clientY])

  }

  render () {
    return (
      <button type="button" onClick={this.handleMouseClick}>cordinates</button>
    )

  }

}
