import React, {Component} from 'react';
import Button from './Button.js'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <Button action={this.props.inc} text="+" />
        <Button action={this.props.dec} text="-" />
      </div>
    );
  }
}

export default Counter;