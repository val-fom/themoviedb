import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import configureStore from './store';

import Favourites from './components/Favourites';
import Header from './components/Header';
import Search from './components/Search';
import MovieListContainer from './containers/MovieListContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

import './App.css';

const history = createHistory();
const store = configureStore(history);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <Search />
        <Favourites />
        <Route exact path="/" component={MovieListContainer} />
        <Route path="/movies/:movieId" component={MovieDetailsContainer} />
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
