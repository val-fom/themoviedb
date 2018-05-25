import { connect } from 'react-redux';

import { searchMovies } from '../actions';

import Search from '../components/Search';

const mapDispatchToProps = dispatch => ({
  searchMovies: query => dispatch(searchMovies(query)),
});

export default connect(null, mapDispatchToProps)(Search);
