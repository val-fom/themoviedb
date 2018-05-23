import { combineReducers } from 'redux';

import { REQUEST_MOVIES, RECEIVE_MOVIES } from '../actions';

const initialState = {
  isFetching: false,
  movies: [],
};

export const movies = (state = initialState, action) => {
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
