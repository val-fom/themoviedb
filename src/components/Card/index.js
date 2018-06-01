import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { BASE_IMAGE_URL } from '../../constants/ApiConstants';
import { MOVIE_DETAILS_PATH } from '../../constants/RouterConstants';

import './Card.css';

const Card = ({ id, posterPath, title }) => (
  <article className="movieList__movie-card">
    <Link to={MOVIE_DETAILS_PATH.replace(':movieId', id)}>
      <img
        src={`${BASE_IMAGE_URL}/w400${posterPath}`}
        alt={`${title} poster`}
        width="200px"
      />

      <Typography variant="subheading" gutterBottom>
        {title}
      </Typography>
    </Link>
  </article>
);

export default Card;
