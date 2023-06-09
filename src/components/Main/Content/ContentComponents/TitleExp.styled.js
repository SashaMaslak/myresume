import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';

export const TitleWrapper = styled.div`
  display: flex;
`;

export const TitleExpStyled = styled.h4`
  margin-right: 16px;
  font-size: 16px;
  text-align: left;
  width: 100%;
`;

export const TitleLink = styled.a`
  color: #595a5a;
  font-weight: bold;
  line-height: 140%;
  //text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #90ee90;
  }
`;

export const GitLink = styled.a`
  color: #595a5a;
  font-weight: bold;
  line-height: 140%;
  margin-left: 16px;
  font-style: italic;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
    color: #90ee90;
  }
`;

export const IconPerson = styled.span`
  position: relative;
  cursor: pointer;
  :before,
  :after {
    display: block;
    position: absolute;
    left: -28px;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.7s;
    -moz-transition: opacity 0.7s;
    transition: opacity 0.7s;
  }
  :before {
    bottom: 20px;
    margin-left: 0px;
    padding: 2px;
    left: -103px;
    width: 110px;
    font-size: 0.75em;
    color: #fff;
    text-align: center;
    background-color: rgba(41, 45, 45, 0.8);
    border-radius: 4px;
    content: attr(data-title);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  :after {
    content: '';
    border-top: 6px solid rgba(41, 45, 45, 0.8);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    bottom: 14px;
    margin-left: 20px;
  }
  :hover:before,
  :hover:after {
    visibility: visible;
    opacity: 1;
  }
`;

export const FiGithubStyled = styled(FiGithub)`
  margin: 2px 8px 0 8px;
`;
