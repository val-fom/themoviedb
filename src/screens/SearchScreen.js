import { connect } from 'react-redux';
import React from 'react';

import { fetchSearchMovies } from '../actions/SearchActions';
import { fetchGenresList } from '../actions/MovieListActions';
import MovieListContainer from '../containers/MovieListContainer';

const SearchScreen = props => <MovieListContainer {...props} />;

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
  genres: state.movieList.genres,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadMovies: page =>
    dispatch(fetchSearchMovies(page, ownProps.match.params.query)),
  getGenres: () => dispatch(fetchGenresList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
