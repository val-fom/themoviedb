import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const MovieDetails = ({ match }) => (
  <Fragment>
    <h3>movieId: {match.params.movieId}</h3>
    <p>movie info details</p>
  </Fragment>
);

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetails;
