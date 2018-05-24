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
    const { movies } = this.props;
    return <MovieList movies={movies} />;
  }
}

MovieListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  isFetching: state.movieList.isFetching,
  movies: state.movieList.movies,
});

export default connect(mapStateToProps)(MovieListContainer);
