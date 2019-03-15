import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';
import Test from './components/TestComponent';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates)}/>
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
    <br></br>
    <Test />
  </div>,
  document.getElementById('global')
);
