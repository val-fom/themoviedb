import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import configureStore from './store';

import Favourites from './components/Favourites';
import HeaderContainer from './containers/HeaderContainer';
import MovieListContainer from './containers/MovieListContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

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
          <Route exact path="/" component={MovieListContainer} />
          <Route exact path="/search" component={MovieListContainer} />
          <Route path="/movies/:movieId" component={MovieDetailsContainer} />
        </main>
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
