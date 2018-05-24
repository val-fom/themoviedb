import {
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_DETAILS,
  REQUEST_MOVIE_DETAILS,
} from '../actions';

export const movieList = (
  state = {
    currentPage: null,
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        currentPage: action.currentPage,
        movies: [...state.movies, ...action.newMovies],
      };
    default:
      return state;
  }
};

export const movieDetails = (
  state = {
    isFetching: true,
    currentMovieId: null,
    details: {},
  },
  action
) => {
  switch (action.type) {
    case REQUEST_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: false,
        currentMovieId: action.currentMovieId,
        details: action.details,
      };
    default:
      return state;
  }
};
