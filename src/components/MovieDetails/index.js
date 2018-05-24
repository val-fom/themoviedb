import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../../api';

import './MovieDetails.css';

const MovieDetails = ({ details, isFetching }) => (
  <section className="section movie-details__section">
    {isFetching ? (
      <div className="loader">Loading ...</div>
    ) : (
      <Fragment>
        <img
          className="movie-details__poster"
          src={`${BASE_IMAGE_URL}/w780${details.poster_path}`}
          alt={`${details.title} poster`}
          width="390px"
        />
        <article className="movie-details__article">
          <h2 className="movie-details__title">{details.title}</h2>
          <p className="movie-details__budget">Budget: ${details.budget}</p>
          <p className="movie-details__popularity">
            Popularity: {details.popularity}
          </p>
          <p className="movie-details__countries">
            Countries:{' '}
            {details.production_countries
              .map(country => country.iso_3166_1)
              .join()}
          </p>
          <p>Release_date: {details.release_date}</p>
          <h3>Storyline</h3>
          <p>{details.overview}</p>
        </article>
      </Fragment>
    )}
  </section>
);

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default MovieDetails;
