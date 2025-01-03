import styled from 'styled-components';

export const SummaryStyled = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 257px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(255, 255, 255, 0.85);
    text-align: center;
    padding: 16px 48px;
  }
  padding: 24px 8px 8px 24px;
  max-width: 600px;
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
  background-color: var(--text-title);
`;

export const TextSummary = styled.div`
  padding: 8px;
  font-size: 16px;
`;
