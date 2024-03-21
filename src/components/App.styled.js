import styled from 'styled-components';

export const Body = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: var(--text-title);
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 1024px;
    padding: 2px 16px;
  }
`;
