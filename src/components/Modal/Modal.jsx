import React, { useContext } from 'react';
import { ModalContext } from './ModalProvider';

import { ModalStyled, ModalContent, ModalClose } from './Modal.styled';

// Компонент модального вікна
export default function Modal() {
  const { isOpen, closeModal } = useContext(ModalContext);

  if (!isOpen) return null;

  return (
    <ModalStyled>
      <ModalContent>
        <ModalClose onClick={closeModal}>Close &times;</ModalClose>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quos
          voluptatem est pariatur nostrum explicabo aliquid sint sed nisi
          voluptatibus nulla magnam asperiores, accusamus voluptates deleniti
          porro vel praesentium placeat sunt, vero perspiciatis autem molestias
          earum architecto? Necessitatibus harum rem doloribus pariatur
          perferendis! Sunt porro exercitationem autem dicta earum neque
          perferendis veritatis, deleniti illum itaque accusamus nulla facilis
          amet voluptas consequuntur, qui minima maiores reprehenderit
          voluptatem? Quos vitae officiis accusantium magni aliquid odio
          voluptate similique sed nulla quidem rerum, distinctio aliquam ea?
          Inventore voluptas beatae et eligendi debitis quod ad atque? Omnis
          eligendi aliquam necessitatibus praesentium incidunt porro ratione ut.
        </p>
      </ModalContent>
    </ModalStyled>
  );
}
