import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
  componentDidMount() {
    const { genres, getGenres } = this.props;
    if (!genres) getGenres();
  }

  render() {
    if (!this.props.genres) return null;

    const { movies, loadMovies, hasMore, genres } = this.props;

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

export default MovieListContainer;
