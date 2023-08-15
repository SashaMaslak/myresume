import styled from 'styled-components';

export const ListExpStyled = styled.ul`
  list-style-type: disc;
  padding: 0px 8px;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    margin-left: 24px;
    margin-bottom: 0px;
  }
`;

export const ItemExpStyled = styled.li`
  list-style: disc;
  text-align: left;
  margin-left: 12px;
  @media screen and (min-width: 1024px) {
    margin-left: 0px;
  }
`;
