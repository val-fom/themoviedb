import React from 'react';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroller';

import MovieList from '../components/MovieList';

const MovieListContainer = ({ movies, currentPage, loadMore }) => {
  const loader = (
    <div className="loader" key="loader">
      Loading ...
    </div>
  );

  return (
    <InfiniteScroll
      pageStart={currentPage}
      loadMore={loadMore}
      loader={loader}
      hasMore // TODO:
    >
      <MovieList movies={movies} />
    </InfiniteScroll>
  );
};

MovieListContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  loadMore: PropTypes.func.isRequired,
};

MovieListContainer.defaultProps = {
  currentPage: null,
};

export default MovieListContainer;
