import styled from 'styled-components';

export const MainStyled = styled.div`
  min-width: 320px;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 320px 1fr;
  }
`;
