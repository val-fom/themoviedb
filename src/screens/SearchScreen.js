import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchMovies, setQuery } from '../actions';

import MovieListContainer from '../containers/MovieListContainer';

const SearchScreen = props => {
  if (!props.query) {
    props.setQuery(props.match.params.query);
  }

  return <MovieListContainer {...props} />;
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  currentPage: state.movieList.currentPage,
  hasMore: state.movieList.hasMore,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(fetchSearchMovies(page)),
  setQuery: query => dispatch(setQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
