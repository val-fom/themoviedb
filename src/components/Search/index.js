import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import './Search.scss';

class Search extends Component {
  onSubmit = ev => {
    ev.preventDefault();
    const query = ev.target.search.value;
    const { searchMovies } = this.props;
    searchMovies(query);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search">
        <TextField
          id="search"
          label="Search movies"
          type="search"
          className="search__input"
          autoComplete="off"
        />
      </form>
    );
  }
}

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;
