import React, { useState } from 'react';
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
  CertBlock,
} from './TitleExp.styled';

const TitleExp = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    console.log('openModal:', openModal);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    console.log('closeModal:', closeModal);
    setIsOpenModal(false);
  };

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
              <CertBlock onClick={openModal}>
                <GrCertificateStyled size={18} />
                CERTIFICATE
              </CertBlock>
            ) : (
              <CertBlock href={git} target="_blank">
                <GrCertificateStyled size={16} />
                certificate
              </CertBlock>
            )}
          </>
        )}
      </div>
    </TitleWrapper>
  );
};

export default TitleExp;
