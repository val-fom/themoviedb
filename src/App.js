import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Favourites from './components/Favourites';
import Header from './components/Header';
import Search from './components/Search';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Search />
          <Favourites />
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:movieId" component={MovieCard} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
