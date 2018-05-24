import * as api from '../api';
// action types
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS';
export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
// action creators
const receiveMovies = response => ({
  type: RECEIVE_MOVIES,
  currentPage: response.page,
  newMovies: response.results,
});

const requestMovieDetails = () => ({
  type: REQUEST_MOVIE_DETAILS,
});

const receiveMovieDetails = response => ({
  type: RECEIVE_MOVIE_DETAILS,
  currentMovieId: response.id,
  details: response,
});
// async action creators
export const fetchMovies = page => dispatch =>
  api.getPopular(page).then(response => dispatch(receiveMovies(response)));

export const fetchMovieDetails = movieId => dispatch => {
  dispatch(requestMovieDetails());
  return api
    .getMovieDetails(movieId)
    .then(response => dispatch(receiveMovieDetails(response)));
};
