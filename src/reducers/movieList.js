import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  currentPage: null,
  hasMore: true,
  movies: [],
  query: null,
};

export const movieList = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentPage: action.currentPage,
        hasMore: action.hasMore,
        movies: [...state.movies, ...action.newMovies],
      };
    case types.RESET_MOVIE_LIST:
      return {
        ...state,
        currentPage: 0,
        movies: [],
      };
    case types.SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
