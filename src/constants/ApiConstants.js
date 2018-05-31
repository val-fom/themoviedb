const API_HOSTNAME = '//api.themoviedb.org/3';
const API_KEY = 'da9a74c438c0aec2e101b15f0c154ec4';

const constructUrl = url =>
  `${API_HOSTNAME}${url}${
    url.indexOf('?') === -1 ? '?' : '&'
  }api_key=${API_KEY}`;

export const MOVIE_DETAILS_URL = constructUrl('/movie/:movieId');
export const POPULAR_MOVIES_URL = constructUrl('/movie/popular?page=:page');
export const SEARCH_MOVIES_URL = constructUrl(
  '/search/movie?page=:page&query=:query'
);

export const BASE_IMAGE_URL = '//image.tmdb.org/t/p';
