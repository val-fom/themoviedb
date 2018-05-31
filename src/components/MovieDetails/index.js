import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { BASE_IMAGE_URL } from '../../constants/ApiConstants';

import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails();
  }

  render() {
    const { details, isFetching } = this.props;

    return (
      <section className="section movie-details__section">
        {isFetching ? (
          <div className="loader">Loading ...</div>
        ) : (
          <Fragment>
            <img
              className="movie-details__poster"
              src={`${BASE_IMAGE_URL}/w780${details.posterPath}`}
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
                {details.productionCountries
                  .map(country => country.iso31661)
                  .join()}
              </p>
              <p>Release date: {details.releaseDate}</p>
              <h3>Storyline</h3>
              <p>{details.overview}</p>
            </article>
          </Fragment>
        )}
      </section>
    );
  }
}

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
  fetchMovieDetails: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default MovieDetails;
