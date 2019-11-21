import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './app';

import './styles.css';
import DefaultErrorBoundary from '../DefautlErrorBoundary';

import { Global, css } from '@emotion/core';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const globalStyle = css`
  html {
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    font-family: antarctican-mono, sans-serif;
    background-color: #c2353a;
    color: #000;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
