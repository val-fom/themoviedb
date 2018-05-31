import { LOCATION_CHANGE } from 'react-router-redux';
import * as types from '../constants/ActionTypes';

const initialState = {
  hasMore: true,
  isFetching: false,
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
        hasMore: action.hasMore,
        movies: [...state.movies, ...action.newMovies],
      };
    case types.SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case LOCATION_CHANGE:
      return {
        ...state,
        hasMore: true,
        movies: [],
      };
    default:
      return state;
  }
};
