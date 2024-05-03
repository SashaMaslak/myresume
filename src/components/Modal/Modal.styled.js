import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Півпрозорий фон */
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 1% auto;
  padding: 50px 20px 20px 20px;
  border: 1px solid #888;
  max-width: 50%;
`;

export const ModalImgBlock = styled.p`
  display: flex;
  justify-content: center; /* Вирівнювання по центру по горизонталі */
  align-items: center; /* Вирівнювання по центру по вертикалі */
  max-width: 100%; /* Максимальна ширина блоку */
  overflow: hidden; /* Щоб картинка не виходила за межі блоку */
`;

export const SertStyled = styled.img`
  max-width: 100%; /* Максимальна ширина картинки */
  height: auto; /* Автоматична висота, щоб зберігти пропорції */
`;

export const ModalClose = styled.span`
  position: absolute;
  right: 32px;
  top: 16px;
  color: var(--text-title);
  float: right;
  font-size: 16px;
  font-weight: bold;
  &:hover,
  &:focus {
    font-size: 18px;
    color: var(--bg-sidebar);
    text-decoration: none;
    cursor: pointer;
  }
`;
