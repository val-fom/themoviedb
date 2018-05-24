import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FAVOURITES } from '../../constants';

import './Favourites.css';

const Favourites = () => (
  <div className="favourites">
    <h3>Favourites</h3>
    <ul>
      {FAVOURITES.map((item, i) => (
        <li key={i}>
          <Link to={`/movies/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Favourites;
