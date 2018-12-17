import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { BASE_IMAGE_URL } from '../../constants/ApiConstants';
import { MOVIE_DETAILS_PATH } from '../../constants/RouterConstants';

import './Card.scss';

const Card = ({ id, posterPath, title, genres, genreIds }) => (
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
      <Typography variant="caption" gutterBottom>
        {genreIds.map(genreId => genres[genreId].name).join(', ')}
      </Typography>
    </Link>
  </article>
);

Card.propTypes = {
  genreIds: PropTypes.array.isRequired,
  genres: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
