import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Reset />
    <App />
  </>,
);
