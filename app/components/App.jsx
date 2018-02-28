import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchScreen from '../containers/SearchScreen';
import FilmScreen from '../containers/FilmScreen';

const App = () => (
  <div>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/search" component={SearchScreen} />
    <Route
      path="/search/:searchQuery"
      render={searchQuery => (
        <SearchScreen searchQuery={searchQuery} />
      )}
    />
    <Route
      path="/film/:searchQuery"
      render={searchQuery => (
        <FilmScreen searchQuery={searchQuery} />
      )}
    />
  </div>
);

export default App;
