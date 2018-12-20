import { push } from 'connected-react-router';

import { callApi } from '../utils/ApiUtils';
import { getPathName } from '../selectors/CommonSelectors';
import { SEARCH_MOVIES_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';
import { fetchMoviesRequest, fetchMoviesSuccess } from './MovieListActions';

const setQuery = query => ({
  type: types.SET_QUERY,
  query,
});

export const fetchSearchMovies = (page, query) => async dispatch => {
  dispatch(setQuery(query));
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(
    SEARCH_MOVIES_URL.replace(':page', page).replace(':query', query)
  );
  dispatch(fetchMoviesSuccess(json));
};

export const searchMovies = query => (dispatch, getState) => {
  const path = getPathName(getState());
  const nextPath = `/search/${query}`;
  if (path !== nextPath) dispatch(push(nextPath));
};
