import { PropTypes } from 'prop-types';
import React from 'react';

import Card from '../Card';

import './MovieList.css';

const MovieList = ({ movies, genres }) => (
  <section className="section movieList__section">
    <div className="movieList__wrapper">
      {movies.map(({ id, posterPath, title, genreIds }) => (
        <Card
          genreIds={genreIds}
          genres={genres}
          id={id}
          key={id}
          posterPath={posterPath}
          title={title}
        />
      ))}
    </div>
  </section>
);

MovieList.propTypes = {
  genres: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MovieList;
