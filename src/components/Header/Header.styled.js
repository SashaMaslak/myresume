import styled from 'styled-components';

export const MediaScreen = () => {};

export const HeaderStyled = styled.div`
  margin: auto;
  position: relative;
  min-width: 320px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
  }
`;

export const Hero = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    //background-color: rgba(244, 214, 68, 0.82);
    background-color: rgba(144, 238, 144, 0.82);
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 257px;
    transform: translate(-50%);
    height: 120px;
  }
  //background-color: rgba(244, 214, 68, 0.82);
  background-color: rgba(144, 238, 144, 0.82);
  display: grid;
  grid-template-columns: auto auto minmax(18px, 1024px);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  border: none;
  background-color: inherit;
`;
