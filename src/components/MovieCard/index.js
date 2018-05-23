import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ match }) => (
  <Fragment>
    <h3>movieId: {match.params.movieId}</h3>
    <p>movie info details</p>
  </Fragment>
);

export default MovieCard;
