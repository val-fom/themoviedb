import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchMovies } from '../actions';

import MovieListContainer from '../containers/MovieListContainer';

const SearchScreen = props => <MovieListContainer {...props} />;

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadMovies: page => {
    console.log('page: ', page);
    dispatch(fetchSearchMovies(page, ownProps.match.params.query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
