import { getPopular } from '../api';
// action types
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
// action creators
const requestMovies = () => ({
  type: REQUEST_MOVIES,
});

const receiveMovies = response => ({
  type: RECEIVE_MOVIES,
  movies: response.results,
});
// async action creators
export const fetchMovies = () => dispatch => {
  dispatch(requestMovies());
  return getPopular().then(response => dispatch(receiveMovies(response)));
};
