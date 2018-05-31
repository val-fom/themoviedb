import { connect } from 'react-redux';
import React from 'react';

import { searchMovies } from '../actions/SearchActions';
import Search from '../components/Search';

const SearchContainer = props => <Search {...props} />;

const mapDispatchToProps = dispatch => ({
  searchMovies: query => dispatch(searchMovies(query)),
});

export default connect(null, mapDispatchToProps)(SearchContainer);
