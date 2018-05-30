import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import configureStore from './store';

import {
  MOVIE_DETAILS_PATH,
  POPULAR_PATH,
  SEARCH_PATH,
} from './constants/RouterConstants';

import Favourites from './components/Favourites';
import HeaderContainer from './containers/HeaderContainer';
import PopularScreen from './screens/PopularScreen';
import MovieDetailsContainer from './containers/MovieDetailsContainer';
import SearchScreen from './screens/SearchScreen';

import './App.css';

const history = createHistory();
const store = configureStore(history);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <HeaderContainer />
        <Favourites />
        <main className="main">
          <Route exact path="/" render={() => <Redirect to={POPULAR_PATH} />} />
          <Route exact path={POPULAR_PATH} component={PopularScreen} />
          <Route path={SEARCH_PATH} component={SearchScreen} />
          <Route path={MOVIE_DETAILS_PATH} component={MovieDetailsContainer} />
        </main>
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
