import styled from 'styled-components';

export const HeaderStyled = styled.div`
  margin: auto;
  position: relative;
  width: 320px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Hero = styled.div`
  width: 100%;
  background-color: rgba(244, 214, 68, 0.82);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 257px;
  transform: translate(-50%);
  height: 120px;
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  border: none;
  background-color: inherit;
`;

// display: grid;
// grid-template-columns: auto auto minmax(18px, 292px);
// justify-content: center;
// align-items: center;
// position: absolute;
// bottom: 0;
// left: 0;
