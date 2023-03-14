import styled from 'styled-components';

export const LinkItem = styled.div`
  position: relative;
  margin-left: auto;
  flex: 0 1 10%;

  :hover,
  :focus {
    cursor: pointer;
    color: #8c52ff;
    font-weight: bold;
    svg {
      color: #8c52ff;
    }
    p,
    a {
      visibility: visible;
      opacity: 1;
    }
    a {
      display: flex;
    }
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row-reverse;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #292d2d;
  margin: 2px 2px 2px 2px;
  border-radius: 4px;
  padding: 0px;
  width: 32px;
  height: 32px;
  line-height: 0;
  svg {
    color: #f4d644;
    display: block;
    padding: 4px;
  }
`;

export const ContactTitleText = styled.p`
  visibility: hidden;
  opacity: 0;
  color: #292d2d;
  font-size: 14px;
  font-weight: bold;
  line-height: 120%;
`;

export const ContactText = styled.p`
  visibility: hidden;
  opacity: 0;
  font-size: 14px;
  line-height: 110%;
`;

export const ContactWrapper = styled.a`
  display: none;
  position: fixed;
  color: #8c52ff;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
  padding: 0px;
  background-color: rgba(255, 255, 255, 0.85);
  right: 50px;
  padding: 8px;
  border-radius: 6px;
`;
