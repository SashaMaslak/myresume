import styled from 'styled-components';

export const ContentStyled = styled.div`
  padding: 8px;
  background-color: var(--accent-bg);
  text-align: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    background-color: var(--content-bg);
    padding: 12px 0px;
  }
  @media screen and (min-width: 1024px) {
    padding: 32px 16px;
  }
`;

export const TitleExperiences = styled.h3`
  color: var(--text-title);
  font-size: 20px;
  position: relative;
  :after {
    content: '';
    display: block;
    position: absolute;
    width: 220px;
    height: 2px;
    background-color: var(--text-title);
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -8px;
  }
`;
