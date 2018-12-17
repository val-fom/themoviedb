import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';

const configureStore = history => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers({
      router: connectRouter(history),
      ...reducers,
    }),
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), thunkMiddleware)
    )
  );
};
export default configureStore;
