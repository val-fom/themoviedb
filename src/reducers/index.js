import { GET_MOVIES } from '../actions';

export const movieList = (
  state = {
    currentPage: null,
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        currentPage: action.currentPage,
        movies: [...state.movies, ...action.newMovies],
      };
    default:
      return state;
  }
};
