import IconItem from './IconItem';

import {
  LineStyled,
  CircleStyled,
  LineColumnStyled,
} from './LineColumn.styled';

const LineColumn = ({ isGit, gitUrl, inProcess }) => {
  return (
    <LineColumnStyled>
      <CircleStyled>
        <IconItem isGit={isGit} gitUrl={gitUrl} inProcess={inProcess} />
      </CircleStyled>
      <LineStyled />
    </LineColumnStyled>
  );
};

export default LineColumn;
