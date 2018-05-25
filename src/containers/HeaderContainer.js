import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';

class HeaderContainer extends Component {
  render() {
    return <Header subheading={this.props.subheading} />;
  }
}

HeaderContainer.propTypes = {
  subheading: PropTypes.string.isRequired,
};

const extractHeadingFromPathname = pathname => {
  switch (true) {
    case /^\/$/.test(pathname):
      return 'popular films';
    case /^\/movie/.test(pathname):
      return 'movie details';
    case /^\/search/.test(pathname):
      return 'search';
    default:
      return '';
  }
};

const mapStateToProps = state => ({
  subheading: extractHeadingFromPathname(state.router.location.pathname),
});

export default connect(mapStateToProps)(HeaderContainer);
