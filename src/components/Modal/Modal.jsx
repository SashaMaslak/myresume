import React, { useContext } from 'react';
import { ModalContext } from './ModalProvider';
import diploma from '../../images/diploma1.jpg';
import sertGoit from '../../images/cert_goit1.jpg';
import sertEng from '../../images/cert_english.jpg';

import {
  ModalStyled,
  ModalContent,
  ModalImgBlock,
  ModalClose,
  SertStyled,
} from './Modal.styled';

// Компонент модального вікна
export default function Modal() {
  const { isOpen, closeModal, nameSert } = useContext(ModalContext);

  let urlSert = '';

  if (nameSert === 'DNIPROVSKIY STATE TECHNICAL UNIVERSITY') {
    urlSert = diploma;
  }
  if (nameSert === "IT SCHOOL 'GOIT'") {
    urlSert = sertGoit;
  }
  if (nameSert === 'FRIENDS CLUB') {
    urlSert = sertEng;
  }

  if (!isOpen) return null;

  return (
    <ModalStyled>
      <ModalContent>
        <ModalClose onClick={closeModal}>Close &times;</ModalClose>
        <ModalImgBlock>
          <SertStyled src={urlSert} alt="sertificate" />
        </ModalImgBlock>
      </ModalContent>
    </ModalStyled>
  );
}
