import React, { useContext } from 'react';
import { ModalContext } from './ModalProvider';
import diploma from '../../images/diploma1.jpg';
import sertGoit from '../../images/cert_goit1.jpg';
import sertEng from '../../images/cert_english.jpg';
import sertHillel1 from '../../images/cert_hillel1.png';
import sertHillel2 from '../../images/cert_hillel2.png';

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
  if (nameSert === "IT SCHOOL 'GOIT' FULLSTACK") {
    urlSert = sertGoit;
  }
  if (nameSert === 'FRIENDS ENGLISH CLUB') {
    urlSert = sertEng;
  }
  if (nameSert === "IT SCHOOL 'HILLEL' - FRONTEND") {
    urlSert = sertHillel1;
  }
  if (nameSert === "IT SCHOOL 'HILLEL' - TYPESCRIPT") {
    urlSert = sertHillel2;
  }
  console.log('urlSert:', urlSert);
  console.log('urlSert:', urlSert);

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
