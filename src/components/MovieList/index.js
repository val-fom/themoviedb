import { PropTypes } from 'prop-types';
import React from 'react';

import Card from '../Card';

import { BASE_IMAGE_URL } from '../../constants/ApiConstants';
import { MOVIE_DETAILS_PATH } from '../../constants/RouterConstants';

import './MovieList.css';

const MovieList = ({ movies }) => (
  <section className="section movieList__section">
    <div className="movieList__wrapper">
      {movies.map(({ id, posterPath, title }) => (
        <Card key={id} id={id} posterPath={posterPath} title={title} />
      ))}
    </div>
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
