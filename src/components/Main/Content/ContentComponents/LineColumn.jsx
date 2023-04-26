import { BsGithub } from 'react-icons/bs';
import {
  LineStyled,
  CircleStyled,
  LineColumnStyled,
  IconGitStyled,
  Link,
} from './LineColumn.styled';

const LineColumn = ({ isGit, gitUrl }) => {
  return (
    <LineColumnStyled>
      <LineStyled>
        {isGit && (
          <Link href={gitUrl} target="_blank">
            <IconGitStyled>
              <BsGithub size="25px" />
            </IconGitStyled>
          </Link>
        )}
      </LineStyled>
      <CircleStyled />
    </LineColumnStyled>
  );
};

export default LineColumn;
