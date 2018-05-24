import { REQUEST_MOVIES, RECEIVE_MOVIES } from '../actions';

export const movieList = (
  state = {
    isFetching: false,
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        movies: action.movies,
      };
    default:
      return state;
  }
};
