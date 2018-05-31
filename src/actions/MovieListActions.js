import { callApi } from '../utils/ApiUtils';
import { POPULAR_MOVIES_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';

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
