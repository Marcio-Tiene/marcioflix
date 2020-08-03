import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      
      <a  target='_blank' rel="noopener noreferrer" href="https://github.com/Marcio-Tiene">
        <img className='Logo' src={Logo} alt="marcioflix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        
        <a target='_blank' rel="noopener noreferrer" href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
