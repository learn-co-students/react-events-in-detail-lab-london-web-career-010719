import React from "react";
import ReactDOM from "react-dom";

// These must be defined for code to work in browser
import CoordinatesButton from "./components/CoordinatesButton";
import DelayedButton from "./components/DelayedButton";

ReactDOM.render(
  <div>
    <CoordinatesButton
      onReceiveCoordinates={e => {
        // let coords = [];
        // coords.push(e.clientX, e.clientY);
        console.log([e.clientX, e.clientY]);
      }}
    />
    <DelayedButton onDelayedClick={event => console.log(event)} delay={1500} />
  </div>,
  document.getElementById("global")
);
