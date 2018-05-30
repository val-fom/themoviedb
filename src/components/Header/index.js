import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchContainer from '../../containers/SearchContainer';

import { POPULAR_PATH } from '../../constants/RouterConstants';

import './Header.css';

const disableLink = e => e.preventDefault();

const Header = ({ subheading, currentPathName }) => (
  <header className="header">
    <h2 className="header__heading">
      <Link
        to={POPULAR_PATH}
        onClick={POPULAR_PATH === currentPathName ? disableLink : null}
      >
        themoviedb-app
      </Link>{' '}
      / {subheading}
    </h2>
    <SearchContainer />
  </header>
);

Header.propTypes = {
  subheading: PropTypes.string.isRequired,
  currentPathName: PropTypes.string.isRequired,
};

export default Header;
