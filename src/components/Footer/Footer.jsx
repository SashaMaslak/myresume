import React from 'react';
import { Copyright, CopyrightLink } from './Footer.styled';

const Footer = () => {
  return (
    <div>
      <CopyrightLink href="https://sashamaslak.github.io/myresume/">
        <Copyright>Link Resume SashaMaslak © 2023</Copyright>
      </CopyrightLink>
    </div>
  );
};

export default Footer;
