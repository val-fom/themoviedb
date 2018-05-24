import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <Fragment>
      <h2>List of popular movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
