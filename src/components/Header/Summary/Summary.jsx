import {
  SummaryStyled,
  TitleWrapper,
  TitleSummary,
  LineSummary,
  TextSummary,
} from './Summary.styled';

const Summary = ({ text, title }) => {
  return (
    <SummaryStyled>
      <TitleWrapper>
        <TitleSummary>{title}</TitleSummary>
        <LineSummary />
      </TitleWrapper>
      <TextSummary>{text}</TextSummary>
    </SummaryStyled>
  );
};

export default Summary;
