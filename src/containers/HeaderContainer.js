import { connect } from 'react-redux';

import Header from '../components/Header';

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

export default connect(mapStateToProps)(Header);
