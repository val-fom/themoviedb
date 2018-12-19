import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React, { Fragment } from 'react';

import configureStore from './store/configureStore';

import {
  MOVIE_DETAILS_PATH,
  POPULAR_PATH,
  SEARCH_PATH,
} from './constants/RouterConstants';
import { CUSTOM_THEME } from './constants/MuiConstants';

import Favourites from './components/Favourites';
import HeaderContainer from './containers/HeaderContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';
import MovieListContainer from './containers/MovieListContainer';

import './App.scss';

const history = createBrowserHistory();
const store = configureStore(history);

const App = () => (
  <MuiThemeProvider theme={CUSTOM_THEME}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Fragment>
          <HeaderContainer />
          <Favourites />
          <main className="main">
            <Route
              exact
              path="/"
              render={() => <Redirect to={POPULAR_PATH} />}
            />
            <Route exact path={POPULAR_PATH} component={MovieListContainer} />
            <Route path={SEARCH_PATH} component={MovieListContainer} />
            <Route
              path={MOVIE_DETAILS_PATH}
              component={MovieDetailsContainer}
            />
          </main>
        </Fragment>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
