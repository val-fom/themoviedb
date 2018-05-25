import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../../api';

import './MovieList.css';

const MovieList = ({ movies }) => (
  <section className="section movieList__section">
    <div className="movieList__wrapper">
      {movies.map(movie => (
        <article className="movieList__movie-card" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`${BASE_IMAGE_URL}/w400${movie.poster_path}`}
              alt={`${movie.title} poster`}
              width="200px"
            />
          </Link>
          <Link to={`/movies/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
        </article>
      ))}
    </div>
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
