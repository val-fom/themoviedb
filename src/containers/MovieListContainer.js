import React from 'react';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroller';

import MovieList from '../components/MovieList';

const MovieListContainer = ({ movies, loadMovies, hasMore }) => {
  const loader = (
    <div className="loader" key="loader">
      Loading ...
    </div>
  );

  return (
    <InfiniteScroll loadMore={loadMovies} loader={loader} hasMore={hasMore}>
      <MovieList movies={movies} />
    </InfiniteScroll>
  );
};

MovieListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default MovieListContainer;
