import {
  TitleWrapper,
  TitleExpStyled,
  TitleLink,
  GitLink,
  IconPerson,
  FiGithubStyled,
} from './TitleExp.styled';
import { RiTeamLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

const TitleExp = ({ item }) => {
  const { name, teamProject, url, git } = item;
  return (
    <TitleWrapper>
      <TitleExpStyled>
        <TitleLink href={url} target="_blank">
          {name}
        </TitleLink>
      </TitleExpStyled>
      <IconPerson data-title="team project">
        {teamProject === true && <RiTeamLine />}
      </IconPerson>
      <IconPerson data-title="personal project">
        {teamProject === false && <BsPerson />}
      </IconPerson>
      {git && (
        <GitLink href={git} target="_blank">
          <FiGithubStyled />
          GITPAGE
        </GitLink>
      )}
    </TitleWrapper>
  );
};

export default TitleExp;
