import React from 'react';
import { FooterBase } from './styles';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>

      <Link to="/">
        <img className='Logo' src={Logo} alt="marcioflix logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}

        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Marcio-Tiene/marcioflix">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
