import { getPopular } from '../api';
// action types
export const GET_MOVIES = 'GET_MOVIES';
// action creators
const receiveMovies = response => ({
  type: GET_MOVIES,
  currentPage: response.page,
  newMovies: response.results,
});
// async action creators
export const fetchMovies = page => dispatch =>
  getPopular(page).then(response => dispatch(receiveMovies(response)));
