import styled from 'styled-components';

export const ItemExpStyled = styled.li`
  display: block;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 70px 60px 1fr;
    gap: 12px;
  }
`;

export const InfoColumn = styled.section`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: start;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
