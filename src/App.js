import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/index.css';
import axios from 'axios';


// Component Imports

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      rainbowsPhotos: [],
      dogsPhotos: [],
      waterfallsPhotos: [],
    };
  }

  componentDidMount() {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=rainbow&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          rainbowsPhotos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogsPhotos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfall&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          waterfallsPhotos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    performSearch = (query) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/rainbows" /> } />
            <Route path="/search/:query" render={ () => <PhotoContainer data={this.state.photos} /> } />
            <Route path="/rainbows" render={ () => <PhotoContainer data={this.state.rainbowsPhotos} /> } />
            <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogsPhotos} /> } />
            <Route path="/waterfalls" render={ () => <PhotoContainer data={this.state.waterfallsPhotos} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  
export default App;
