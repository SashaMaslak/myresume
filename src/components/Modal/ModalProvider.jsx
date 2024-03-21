import React, { useState, createContext } from 'react';

// Створюємо контекст для модального вікна
export const ModalContext = createContext();

// Компонент, який надає можливість відкривання та закривання модального вікна
export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
