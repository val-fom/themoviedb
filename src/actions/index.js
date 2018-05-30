import { push } from 'react-router-redux';
import { callApi } from '../utils/ApiUtils';
import * as types from '../constants/ActionTypes';
import {
  POPULAR_MOVIES_URL,
  SEARCH_MOVIES_URL,
} from '../constants/ApiConstants';
import { getQuery, getPathName } from '../selectors';

const fetchMoviesRequest = () => ({
  type: types.FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = json => ({
  type: types.FETCH_MOVIES_SUCCESS,
  currentPage: json.page,
  hasMore: json.page < json.totalPages,
  newMovies: json.results,
});

export const fetchPopularMovies = page => async dispatch => {
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(POPULAR_MOVIES_URL.replace(':page', page));
  dispatch(fetchMoviesSuccess(json));
};

export const fetchSearchMovies = page => async (dispatch, getState) => {
  dispatch(fetchMoviesRequest());
  const state = getState();
  const query = getQuery(state);
  const { json } = await callApi(
    SEARCH_MOVIES_URL.replace(':page', page).replace(':query', query)
  );
  dispatch(fetchMoviesSuccess(json));
};

const setQuery = query => ({
  type: types.SET_QUERY,
  query,
});

export const searchMovies = query => (dispatch, getState) => {
  dispatch(setQuery(query));
  const path = getPathName(getState());
  if (!path.startsWith('/search')) dispatch(push(`/search/${query}`));
};
