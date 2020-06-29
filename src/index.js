// Dependency Imports

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

/*************** 
* Index.js uses ReactDOM.render() to select the 'root' div in index.HTML and renders the App.js file to the DOM.
****************/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

