import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { fetchSearchMovies } from '../actions/SearchActions';
import {
  fetchGenresList,
  fetchPopularMovies,
} from '../actions/MovieListActions';
import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
  componentDidMount() {
    const { genres, getGenres } = this.props;
    if (!genres) getGenres();
  }

  render() {
    const { movies, loadMovies, hasMore, genres } = this.props;
    if (!genres) return null;

    const loader = (
      <div className="loader" key="loader">
        Loading ...
      </div>
    );

    return (
      <InfiniteScroll loadMore={loadMovies} loader={loader} hasMore={hasMore}>
        <MovieList movies={movies} genres={genres} />
      </InfiniteScroll>
    );
  }
}

MovieListContainer.propTypes = {
  genres: PropTypes.object,
  getGenres: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

MovieListContainer.defaultProps = {
  genres: null,
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
  genres: state.movieList.genres,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { query } = ownProps.match.params;
  return {
    loadMovies: query
      ? page => dispatch(fetchSearchMovies(page, query))
      : page => dispatch(fetchPopularMovies(page)),
    getGenres: () => dispatch(fetchGenresList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
