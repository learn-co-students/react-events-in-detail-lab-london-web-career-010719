import React, {Component} from 'react' 

export default class Test extends Component {

    sayHello = () => {
        console.log('hello world')
    };

    render() {
        return( 
            <button onClick={this.sayHello}>Click Me to Test</button>
        );
    };
};