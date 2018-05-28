import React from 'react';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroller';

import MovieList from '../components/MovieList';

const MovieListContainer = ({ movies, currentPage, loadMovies, hasMore }) => {
  const loader = (
    <div className="loader" key="loader">
      Loading ...
    </div>
  );

  return (
    <InfiniteScroll
      pageStart={currentPage}
      loadMore={loadMovies}
      loader={loader}
      hasMore={hasMore}
    >
      <MovieList movies={movies} />
    </InfiniteScroll>
  );
};

MovieListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  loadMovies: PropTypes.func.isRequired,
};

MovieListContainer.defaultProps = {
  currentPage: null,
};

export default MovieListContainer;
