import {
  LineStyled,
  CircleStyled,
  LineColumnStyled,
} from './LineColumn.styled';

const LineColumn = () => {
  return (
    <LineColumnStyled>
      <LineStyled />
      <CircleStyled />
    </LineColumnStyled>
  );
};

export default LineColumn;
