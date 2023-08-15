import { BsGithub } from 'react-icons/bs';

import {
  LineStyled,
  CircleStyled,
  LineColumnStyled,
  IconGitStyled,
  Link,
} from './LineColumn.styled';

const LineColumn = ({ isGit, gitUrl }) => {
  const isScreenDesctop = window.matchMedia('(min-width: 1024px)').matches;
  let size = isScreenDesctop ? '25px' : '20px';
  return (
    <LineColumnStyled>
      <CircleStyled>
        {isGit && (
          <Link href={gitUrl} target="_blank">
            <IconGitStyled>
              <BsGithub size={size} />
            </IconGitStyled>
          </Link>
        )}
      </CircleStyled>
      <LineStyled />
    </LineColumnStyled>
  );
};

export default LineColumn;
