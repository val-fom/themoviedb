import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchContainer from '../../containers/SearchContainer';

import './Header.css';

const Header = ({ subheading }) => (
  <header className="header">
    <h2 className="header__heading">
      <Link to="/">themoviedb-app</Link> / {subheading}
    </h2>
    <SearchContainer />
  </header>
);

Header.propTypes = {
  subheading: PropTypes.string.isRequired,
};

export default Header;
