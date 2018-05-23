import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FAVOURITES } from '../../constants';

const MovieList = () => (
  <Fragment>
    <h2>List of popular movies</h2>
    <ul>
      {FAVOURITES.map((item, i) => (
        <li key={i}>
          <Link to={`/movies/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default MovieList;
