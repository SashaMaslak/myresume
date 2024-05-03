import React from 'react';
import { Body } from './App.styled';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';

export const App = () => {
  return (
    <Body>
      <Header />
      <Main />
      <Footer />
      <Modal />
    </Body>
  );
};
