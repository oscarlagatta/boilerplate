import React from 'react';
import { hot } from 'react-hot-loader';

import { css } from '@emotion/core';
import { appWidth } from './styles/globals';

const mainStyle = css`
  ${appWidth}
  min-height: 40em;
  padding-top: 2em;
  padding-bottom: 2em;
  outline: 0;
  color: #fff;
  text-align: center;

  .main-heading {
    font-family: antarctican-headline, sans-serif;
    font-style: normal;
  }
`;

class App extends React.Component {
  render() {
    return (
      <main css={mainStyle}>
        <h1 class="main-heading">This is Jato's React boilerplate.</h1>
      </main>
    );
  }
}

export default hot(module)(App);
