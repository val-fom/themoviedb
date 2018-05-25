import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Search from '../Search';

import './Header.css';

const Header = ({ subheading }) => (
  <header className="header">
    <h2 className="header__heading">
      <Link to="/">themoviedb-app</Link> / {subheading}
    </h2>
    <Search />
  </header>
);

Header.propTypes = {
  subheading: PropTypes.string.isRequired,
};

export default Header;
