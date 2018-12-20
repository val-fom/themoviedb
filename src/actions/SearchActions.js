import { push } from 'connected-react-router';

import { callApi } from '../utils/ApiUtils';
import { getPathName } from '../selectors/CommonSelectors';
import { SEARCH_MOVIES_URL } from '../constants/ApiConstants';
import { fetchMoviesRequest, fetchMoviesSuccess } from './MovieListActions';

export const fetchSearchMovies = (page, query) => async dispatch => {
  dispatch(fetchMoviesRequest());
  const { json } = await callApi(
    SEARCH_MOVIES_URL.replace(':page', page).replace(':query', query)
  );
  dispatch(fetchMoviesSuccess(json));
};

export const searchMovies = query => (dispatch, getState) => {
  const path = getPathName(getState());
  const nextPath = `/search/${query}`;
  if (path !== nextPath) dispatch(push(nextPath));
};
