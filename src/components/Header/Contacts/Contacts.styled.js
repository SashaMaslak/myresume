import styled from 'styled-components';

export const ContactsStyled = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  flex-direction: column;
  padding: 4px;
  @media screen and (min-width: 768px) {
    padding: 8px;
  }
  @media screen and (min-width: 1024px) {
    padding: 16px;
  }
`;
