import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {
  onSubmit = ev => {
    ev.preventDefault();
    const query = ev.target.search.value;
    this.props.searchMovies(query);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search">
        <input type="text" name="search" />
      </form>
    );
  }
}

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;
