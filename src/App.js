import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import createHistory from 'history/createHashHistory';

import Favourites from './components/Favourites';
import Header from './components/Header';
import Search from './components/Search';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';

import './App.css';

import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(middleware))
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <Search />
        <Favourites />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:movieId" component={MovieCard} />
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
