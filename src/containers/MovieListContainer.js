import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';

import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovies());
  }
  render() {
    const { movies, isFetching } = this.props;
    return <MovieList movies={movies} isFetching={isFetching} />;
  }
}

MovieListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isFetching: state.movieList.isFetching,
  movies: state.movieList.movies,
});

export default connect(mapStateToProps)(MovieListContainer);
