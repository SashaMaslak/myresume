import { RiTeamLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

import {
  TitleWrapper,
  TitleExpStyled,
  TitleLink,
  GitLink,
  IconPerson,
  FiGithubStyled,
  AiFillGithubStyled,
  GrCertificateStyled,
} from './TitleExp.styled';

const TitleExp = ({ item }) => {
  const { name, teamProject, url, git, inProcess } = item;
  const isScreenTablet = window.matchMedia('(min-width: 768px)').matches;
  return (
    <TitleWrapper>
      <TitleExpStyled>
        <TitleLink href={url} target="_blank">
          {name}
        </TitleLink>
      </TitleExpStyled>
      <div style={{ display: 'flex' }}>
        <IconPerson data-title="team project">
          {teamProject === true && <RiTeamLine />}
        </IconPerson>
        <IconPerson data-title="personal project">
          {teamProject === false && <BsPerson />}
        </IconPerson>

        {git && (
          <>
            {isScreenTablet ? (
              <GitLink href={git} target="_blank">
                <FiGithubStyled />
                GITPAGE
              </GitLink>
            ) : (
              <GitLink href={git} target="_blank">
                <AiFillGithubStyled size={16} />
                github
              </GitLink>
            )}
          </>
        )}
        {!inProcess && !git && (
          <>
            {isScreenTablet ? (
              <GitLink href={git} target="_blank">
                <GrCertificateStyled />
                CERTIFICATE
              </GitLink>
            ) : (
              <GitLink href={git} target="_blank">
                <GrCertificateStyled size={16} />
                certificate
              </GitLink>
            )}
          </>
        )}
      </div>
    </TitleWrapper>
  );
};

export default TitleExp;
