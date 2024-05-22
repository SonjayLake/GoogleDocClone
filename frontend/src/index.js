import React from 'react';
import ReactDOM from 'react-dom';
import './toolBar.css';  // Only if you have this CSS file for global styles
import App from './app';  // Ensure App.js is in the same src directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
