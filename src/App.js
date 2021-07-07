import React, {Component} from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState( {count: this.state.count + 1} );
  }

  decrement = () => {
    this.setState( {count: this.state.count - 1} );
  }

  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} inc={this.increment} dec={this.decrement} />
      </div>
    );
  }
}

export default App;