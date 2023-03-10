import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-WZX2PCV1RQ');
ReactGA.send('pageview');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Reset />
    <App />
  </>,
);
