import styled from 'styled-components';
/* Стилі для модального вікна */

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
  margin: 15% auto;
  padding: 50px 20px 20px 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const ModalClose = styled.span`
  position: absolute;
  right: 32px;
  top: 16px;
  color: #aaa;
  float: right;
  font-size: 36px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
