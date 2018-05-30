import React from 'react';
import { connect } from 'react-redux';

import { getPathName, getMovieTitle, getQuery } from '../selectors';

import Header from '../components/Header';

const HeaderContainer = props => <Header {...props} />;

const constructSubHeading = state => {
  const pathName = getPathName(state);
  switch (true) {
    case /^\/$/.test(pathName):
      return 'popular films';
    case /^\/movie/.test(pathName):
      return `movie details / ${getMovieTitle(state)}`;
    case /^\/search/.test(pathName):
      return `search / '${getQuery(state)}'`;
    default:
      return '';
  }
};

const mapStateToProps = state => ({
  subheading: constructSubHeading(state),
});

export default connect(mapStateToProps)(HeaderContainer);
