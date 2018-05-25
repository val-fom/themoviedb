import { push } from 'react-router-redux';
import * as api from '../api';
import { callApi } from '../utils/ApiUtils';
import * as types from '../constants/ActionTypes';
import {
  MOVIE_DETAILS_URL,
  POPULAR_MOVIES_URL,
  SEARCH_MOVIES_URL,
} from '../constants/ApiConstants';
import { getQuery, getPath } from '../selectors';

const fetchMoviesRequest = () => ({
  type: types.FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = json => ({
  type: types.FETCH_MOVIES_SUCCESS,
  currentPage: json.page,
  newMovies: json.results,
});

export const resetMovieList = () => ({
  type: types.RESET_MOVIE_LIST,
});

const fetchMovieDetailsRequest = () => ({
  type: types.FETCH_MOVIE_DETAILS_REQUEST,
});

const fetchMovieDetailsSuccess = json => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  currentMovieId: json.id,
  details: json,
});

export const fetchPopularMovies = page => async dispatch => {
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(POPULAR_MOVIES_URL.replace(':page', page));
  dispatch(fetchMoviesSuccess(json));
};

export const fetchSearchMovies = page => async (dispatch, getState) => {
  dispatch(fetchMoviesRequest());
  const state = getState();
  console.log('state: ', state);
  const query = getQuery(state);
  const { json } = await callApi(
    SEARCH_MOVIES_URL.replace(':page', page).replace(':query', query)
  );
  dispatch(fetchMoviesSuccess(json));
};

export const fetchMovieDetails = movieId => async dispatch => {
  dispatch(fetchMovieDetailsRequest());
  const { json } = await callApi(
    MOVIE_DETAILS_URL.replace(':movieId', movieId)
  );
  dispatch(fetchMovieDetailsSuccess(json));
};

const setQuery = query => ({
  type: types.SET_QUERY,
  query,
});

export const searchMovies = query => (dispatch, getState) => {
  dispatch(setQuery(query));
  const path = getPath(getState());
  if (!path.startsWith('/search')) dispatch(push(`/search/${query}`));
};
