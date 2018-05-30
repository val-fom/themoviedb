import { connect } from 'react-redux';

import { fetchPopularMovies } from '../actions';
import MovieListContainer from '../containers/MovieListContainer';

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  hasMore: state.movieList.hasMore,
});

const mapDispatchToProps = dispatch => ({
  loadMovies: page => dispatch(fetchPopularMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
