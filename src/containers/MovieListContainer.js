import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies } from '../actions';

import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies(1));
  }

  loadMore = page => {
    this.props.dispatch(fetchMovies(page));
  };

  render() {
    const { movies } = this.props;
    const loader = (
      <div className="loader" key="loader">
        Loading ...
      </div>
    );

    return (
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        loadMore={this.loadMore}
        hasMore
        loader={loader}
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
});

export default connect(mapStateToProps)(MovieListContainer);
