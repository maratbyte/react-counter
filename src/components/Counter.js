import React, {Component} from 'react';
import Button from './Button.js'

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <p>{this.props.count}</p>
        <div className="Buttons">
          <Button action={this.props.inc} text="+" />
          <Button action={this.props.dec} text="-" />
        </div>
      </div>
    );
  }
}

export default Counter;