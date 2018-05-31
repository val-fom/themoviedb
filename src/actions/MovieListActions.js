import { push } from 'react-router-redux';
import { callApi } from '../utils/ApiUtils';
import * as types from '../constants/ActionTypes';
import {
  POPULAR_MOVIES_URL,
  SEARCH_MOVIES_URL,
} from '../constants/ApiConstants';
import { getPathName } from '../selectors/CommonSelectors';

const fetchMoviesRequest = () => ({
  type: types.FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = json => ({
  type: types.FETCH_MOVIES_SUCCESS,
  hasMore: json.page < json.totalPages,
  newMovies: json.results,
});

export const fetchPopularMovies = page => async dispatch => {
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(POPULAR_MOVIES_URL.replace(':page', page));
  dispatch(fetchMoviesSuccess(json));
};

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
