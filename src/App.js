import React, { Component } from 'react';
import './css/index.css';

// Component Imports

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoContainer /> 
    </div>
  );
}

export default App;
