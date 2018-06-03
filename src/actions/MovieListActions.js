import { normalize } from 'normalizr';

import { callApi } from '../utils/ApiUtils';
import { POPULAR_MOVIES_URL, GENRE_LIST_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';
import { genreSchema } from '../constants/Schemas';

export const fetchMoviesRequest = () => ({
  type: types.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = json => ({
  type: types.FETCH_MOVIES_SUCCESS,
  hasMore: json.page < json.totalPages,
  newMovies: json.results,
});

export const fetchPopularMovies = page => async dispatch => {
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(POPULAR_MOVIES_URL.replace(':page', page));
  dispatch(fetchMoviesSuccess(json));
};

const fetchGenresListRequest = () => ({
  type: types.FETCH_GENRES_REQUEST,
});

const fetchGenresListSuccess = ({ genres }) => ({
  type: types.FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenresList = () => async dispatch => {
  dispatch(fetchGenresListRequest());
  const { json } = await callApi(GENRE_LIST_URL);

  const { entities } = normalize(json, genreSchema);

  dispatch(fetchGenresListSuccess(entities));
};
