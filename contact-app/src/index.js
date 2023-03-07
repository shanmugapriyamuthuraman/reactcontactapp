import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Function from './Function';
import reportWebVitals from './reportWebVitals';
import Class from './Class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Function props1="vanakam" />
    <Class props1="vanakam class"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
