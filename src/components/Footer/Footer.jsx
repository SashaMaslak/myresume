import React from 'react';
import { Copyright, CopyrightLink } from './Footer.styled';

const Footer = () => {
  return (
    <div>
      <CopyrightLink href="https://github.com/SashaMaslak">
        <Copyright>SashaMaslak © 2023</Copyright>
      </CopyrightLink>
    </div>
  );
};

export default Footer;
