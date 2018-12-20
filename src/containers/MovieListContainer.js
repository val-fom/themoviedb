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
    const {
      movies,
      loadMovies,
      hasMore,
      genres,
      isFetching,
      match,
    } = this.props;
    if (!genres) return null;

    const loader = (
      <div className="loader" key="loader">
        Loading ...
      </div>
    );

    return (
      <InfiniteScroll
        key={match.params.query} // reset infinite scroll counter on query change
        hasMore={isFetching ? false : hasMore}
        loader={loader}
        loadMore={loadMovies}
      >
        <MovieList movies={movies} genres={genres} />
      </InfiniteScroll>
    );
  }
}

MovieListContainer.propTypes = {
  genres: PropTypes.object,
  getGenres: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  loadMovies: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

MovieListContainer.defaultProps = {
  genres: null,
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
  isFetching: state.movieList.isFetching,
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
