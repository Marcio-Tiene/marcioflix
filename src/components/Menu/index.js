import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './index.css';

function Menu({ children }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="marcioflix logo" />
      </Link>

      {children}
    </nav>
  );
}

export default Menu;
