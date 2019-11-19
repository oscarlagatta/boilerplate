import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import App from './app';

import './styles.css';
import DefaultErrorBoundary from '../DefautlErrorBoundary';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
