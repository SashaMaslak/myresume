import {
  IntroduceStyled,
  StyledTitle,
  StyledSubTitle,
} from './Introduce.styled';

const Introduce = ({ name, profession }) => {
  return (
    <IntroduceStyled>
      <StyledTitle>{name}</StyledTitle>
      <StyledSubTitle>{profession}</StyledSubTitle>
    </IntroduceStyled>
  );
};

export default Introduce;
