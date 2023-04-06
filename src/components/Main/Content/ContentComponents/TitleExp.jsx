import {
  TitleWrapper,
  TitleExpStyled,
  TitleLink,
  IconPerson,
} from './TitleExp.styled';
import { RiTeamLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

const TitleExp = ({ item }) => {
  const { name, teamProject, url } = item;
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
    </TitleWrapper>
  );
};

export default TitleExp;
