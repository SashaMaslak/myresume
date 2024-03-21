import React, { useContext } from 'react';
import { ModalContext } from 'components/Modal/ModalProvider';
import { Body } from './App.styled';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';

export const App = () => {
  const { isOpen } = useContext(ModalContext);
  console.log(`isOpen:`, isOpen);

  return (
    <Body>
      <Header />
      <Main />
      <Footer />
      <Modal />
    </Body>
  );
};
