import React, { Component } from 'react';
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

const mapStateToProps = state => ({ movies: state.movies.movies });

export default connect(mapStateToProps)(MovieListContainer);
