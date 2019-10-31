import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>This is Jato's React boilerplate.!!!!!!</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}
const hotFunction = hot(module);
export default hotFunction(App);
