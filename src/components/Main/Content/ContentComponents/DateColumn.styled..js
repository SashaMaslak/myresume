import styled from 'styled-components';

export const DateColumnStyled = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  width: 100px;
  text-align: left;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: auto;
    font-size: 12px;
    line-height: 18px;
    min-width: 60px;
    padding-top: 8px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
    min-width: 80px;
    padding-top: 4px;
  }
`;
