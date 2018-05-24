import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className="header">
    <h2 className="header__heading">this is my header</h2>
    <Link to="/">Home</Link>
  </header>
);

export default Header;
