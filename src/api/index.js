import { status, json } from '../utils';

const API_KEY = 'da9a74c438c0aec2e101b15f0c154ec4';

export const getMovies = (page = 1, query) =>
  query
    ? fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      )
        .then(status)
        .then(json)
        .catch(console.error)
    : fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      )
        .then(status)
        .then(json)
        .catch(console.error);
