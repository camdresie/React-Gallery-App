// Importing App Dependencies

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/index.css';
import axios from 'axios';

// Component Imports

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
// import apiKey from './config';

/*************** 
* The App class is the main class that controls the React Gallery app. State is first declared as having four 
* separate arrays, one to hold the array of objects returned from the Flickr API for each of the three 
* links (rainbows, dogs, and waterfalls) and one for the array returned from the search feature. 
****************/

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

/*************** 
* This section uses axios to make the calls to the Flickr API for each of the links and the search feature. After
* each of the calls, the relevant array declared in state is updated with the array of objects returned from the 
* API call. There is also a performSearch() method declared that retrieves the data when a user enters a search
* term.
****************/

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

/*************** 
* The render method and return statements return the UI elements for the app. There are five different routes,
* one for each of the three links, one for the search feature, and one that redirects the home route to the 
* "rainbows" search so that the page is not blank upon loading. 
****************/
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/rainbows" /> } />
            <Route path="/search/:query" render={ () => <PhotoContainer data={this.state.photos} title="Search Results" /> } />
            <Route path="/rainbows" render={ () => <PhotoContainer data={this.state.rainbowsPhotos} title="Rainbows" /> } />
            <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogsPhotos} title="Dogs" /> } />
            <Route path="/waterfalls" render={ () => <PhotoContainer data={this.state.waterfallsPhotos} title="Waterfalls" /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  
export default App;
