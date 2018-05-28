import { connect } from 'react-redux';

import { fetchSearchMovies } from '../actions';
import MovieListContainer from '../containers/MovieListContainer';

const mapStateToProps = state => ({
  query: state.query,
  movies: state.movieList.movies,
  currentPage: state.movieList.currentPage,
  hasMore: state.movieList.hasMore,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => {
    dispatch(fetchSearchMovies(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
