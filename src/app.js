import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Jato's React boilerplate.</h1>
      </div>
    );
  }
}

export default hot(module)(App);
