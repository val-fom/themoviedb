import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies } from '../actions';

import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
  loadMore = page => {
    this.props.dispatch(fetchMovies(page));
  };

  render() {
    const { movies, currentPage } = this.props;
    const loader = (
      <div className="loader" key="loader">
        Loading ...
      </div>
    );

    return (
      <InfiniteScroll
        pageStart={currentPage}
        loadMore={this.loadMore}
        loader={loader}
        hasMore
      >
        <MovieList movies={movies} />
      </InfiniteScroll>
    );
  }
}

MovieListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  currentPage: state.movieList.currentPage,
});

export default connect(mapStateToProps)(MovieListContainer);
