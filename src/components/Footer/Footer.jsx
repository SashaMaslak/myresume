import React from 'react';

const Footer = () => {
  return (
    <div>
      <a
        href="URL"
        style={{
          textDecoration: 'none',
        }}
      >
        <p
          style={{
            minWidth: '100%',
            backgroundColor: '#292d2d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#a6a6a6',
          }}
        >
          SashaMaslak © 2023
        </p>
      </a>
    </div>
  );
};

export default Footer;
