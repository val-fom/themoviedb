import * as types from '../constants/ActionTypes';

const initialState = {
  currentMovieId: null,
  details: {},
  isFetching: true,
};

export const movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
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
