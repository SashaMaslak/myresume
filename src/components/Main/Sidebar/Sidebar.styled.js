import styled from 'styled-components';
import {
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsEnvelopeAtFill,
  BsFillTelephoneInboundFill,
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

export const BsFillTelephoneInboundFillStyled = styled(
  BsFillTelephoneInboundFill
)`
  position: absolute;
  left: -6px;
  top: 6px;
`;

export const SidebarStyled = styled.div`
  text-align: center;
  width: 100%;
  background-color: #292d2d;
  padding: 16px;
  color: #fff;
  @media screen and (min-width: 768px) {
    /* width: 320px; */
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
    background-color: #a6a6a6;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -8px;
  }
`;

export const TitleItemSkills = styled.h4`
  font-style: italic;
`;

export const ListSkills = styled.ul`
  text-align: left;
  list-style-type: circle;
`;

export const BlockItemSkills = styled.li`
  display: block;
`;

export const ItemSkills = styled.li`
  color: #a6a6a6;
  font-weight: 500;
  line-height: 200%;
  list-style: circle;
  align-items: center;
  position: relative;
`;

export const ItemContacts = styled.li`
  color: #a6a6a6;
  font-weight: 500;
  line-height: 200%;
  align-items: center;
  position: relative;
`;

export const ItemLink = styled.a`
  color: #a6a6a6;
  font-weight: 500;
  line-height: 140%;
  //text-decoration: none;
  margin-left: 18px;
  &:hover {
    cursor: pointer;
    color: #90ee90;
  }
`;
