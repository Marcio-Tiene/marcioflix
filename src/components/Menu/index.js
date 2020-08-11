import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './index.css';
import styled from 'styled-components';

function Menu({ children }) {
  const Nav = children
    ? styled.nav`
        justify-content: space-between;
      `
    : styled.nav`
        justify-content: center;
      `;
  return (
    <Nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="marcioflix logo" />
      </Link>

      {children}
    </Nav>
  );
}

export default Menu;
