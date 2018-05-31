import { connect } from 'react-redux';
import React from 'react';

import {
  getMovieTitle,
  getPathName,
  getQuery,
} from '../selectors/CommonSelectors';

import Header from '../components/Header';

const HeaderContainer = props => <Header {...props} />;

const constructSubHeading = state => {
  const pathName = getPathName(state);
  switch (true) {
    case /^\/popular$/.test(pathName):
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
  currentPathName: getPathName(state),
});

export default connect(mapStateToProps)(HeaderContainer);
