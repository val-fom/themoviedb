import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createHashHistory';

import Favourites from './components/Favourites';
import Header from './components/Header';
import Search from './components/Search';
import MovieListContainer from './containers/MovieListContainer';
import MovieCard from './components/MovieCard';

import './App.css';

import * as reducers from './reducers';

console.log('reducers: ', reducers);

const history = createHistory();
// TODO: move this to configureStore(history) function;
const middlewares = [routerMiddleware(history), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    router: routerReducer,
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
// ^^^^^^
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <Search />
        <Favourites />
        <Route exact path="/" component={MovieListContainer} />
        <Route path="/movies/:movieId" component={MovieCard} />
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
