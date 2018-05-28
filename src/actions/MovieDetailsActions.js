import { callApi } from '../utils/ApiUtils';
import * as types from '../constants/ActionTypes';
import { MOVIE_DETAILS_URL } from '../constants/ApiConstants';

const fetchMovieDetailsRequest = () => ({
  type: types.FETCH_MOVIE_DETAILS_REQUEST,
});

const fetchMovieDetailsSuccess = json => ({
  type: types.FETCH_MOVIE_DETAILS_SUCCESS,
  currentMovieId: json.id,
  details: json,
});

export const fetchMovieDetails = movieId => async dispatch => {
  dispatch(fetchMovieDetailsRequest());
  const { json } = await callApi(
    MOVIE_DETAILS_URL.replace(':movieId', movieId)
  );
  dispatch(fetchMovieDetailsSuccess(json));
};
