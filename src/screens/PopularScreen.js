import { connect } from 'react-redux';
import React from 'react';

import {
  fetchPopularMovies,
  fetchGenresList,
} from '../actions/MovieListActions';
import MovieListContainer from '../containers/MovieListContainer';

const PopularScreen = props => <MovieListContainer {...props} />;

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
  genres: state.movieList.genres,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(fetchPopularMovies(page)),
  getGenres: () => dispatch(fetchGenresList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularScreen);
