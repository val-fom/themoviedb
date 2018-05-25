import { connect } from 'react-redux';

import { fetchPopularMovies } from '../actions';
import MovieListContainer from '../containers/MovieListContainer';

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  currentPage: state.movieList.currentPage,
});

const mapDispatchToProps = dispatch => ({
  loadMore: page => dispatch(fetchPopularMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
