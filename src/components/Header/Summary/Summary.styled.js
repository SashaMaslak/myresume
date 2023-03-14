import styled from 'styled-components';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { GrClose } from 'react-icons/gr';

export const SummaryStyled = styled.div`
  width: 100%;
  height: 257px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(255, 255, 255, 0.85);
  text-align: center;
  padding: 16px 48px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const TitleSummary = styled.h2`
  font-size: 20px;
`;

export const LineSummary = styled.div`
  width: 48px;
  height: 2px;
  background-color: #595a5a;
`;

export const TextSummary = styled.div`
  padding: 8px;
  font-size: 16px;
`;
