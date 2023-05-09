import styled from 'styled-components';

export const ContentStyled = styled.div`
  padding: 16px;
  //background-color: rgba(244, 214, 68, 0.82);
  background-color: rgba(144, 238, 144, 0.82);
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    background-color: rgba(255, 255, 255, 0.82);
  }
`;

export const TitleExperiences = styled.h3`
  color: #595a5a;
  font-size: 20px;
  position: relative;
  :after {
    content: '';
    display: block;
    position: absolute;
    width: 220px;
    height: 2px;
    background-color: #595a5a;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -8px;
  }
`;
