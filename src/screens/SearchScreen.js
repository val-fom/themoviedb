import { connect } from 'react-redux';

import { fetchSearchMovies, resetMovieList } from '../actions';
import MovieListContainer from '../containers/MovieListContainer';

const mapStateToProps = state => ({
  query: state.query,
  movies: state.movieList.movies,
  currentPage: state.movieList.currentPage,
  hasMore: state.movieList.hasMore,
});

const mapDispatchToProps = dispatch => ({
  loadMore: page => {
    console.log(this.props);
    dispatch(fetchSearchMovies(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
