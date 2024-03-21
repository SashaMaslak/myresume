import styled from 'styled-components';
import {
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsEnvelopeAtFill,
  BsFillPhoneVibrateFill,
} from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';

export const BsTelegramStyled = styled(BsTelegram)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const BsLinkedinStyled = styled(BsLinkedin)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const BsGithubStyled = styled(BsGithub)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const BsEnvelopeAtStyled = styled(BsEnvelopeAtFill)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const HiLocationMarkerStyled = styled(HiLocationMarker)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const BsFillPhoneVibrateFillStyled = styled(BsFillPhoneVibrateFill)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const SidebarStyled = styled.div`
  text-align: center;
  width: 100%;
  background-color: var(--bg-sidebar);
  padding: 16px;
  color: #fff;
  @media screen and (min-width: 768px) {
    padding: 32px 16px;
  }
`;

export const TitleSkills = styled.h3`
  font-size: 20px;
  position: relative;
  margin-bottom: 16px;
  :after {
    content: '';
    display: block;
    position: absolute;
    width: 220px;
    height: 2px;
    background-color: var(--text-sidebar);
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -8px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

export const TitleItemSkills = styled.h4`
  font-style: italic;
`;

export const ListSkills = styled.ul`
  text-align: left;
  list-style-type: circle;
  @media screen and (min-width: 1024px) {
    margin-bottom: 48px;
  }
`;

export const BlockItemSkills = styled.li`
  display: block;
  @media screen and (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

export const ItemSkills = styled.li`
  color: var(--text-sidebar);
  font-weight: 500;
  line-height: 200%;
  list-style: circle;
  align-items: center;
  position: relative;
`;

export const ItemContacts = styled.li`
  color: var(--text-sidebar);
  font-weight: 500;
  line-height: 200%;
  align-items: center;
  position: relative;
`;

export const ItemLink = styled.a`
  color: var(--text-sidebar);
  font-weight: 500;
  line-height: 140%;
  //text-decoration: none;
  margin-left: 18px;
  &:hover {
    cursor: pointer;
    color: var(--accent);
  }
`;
