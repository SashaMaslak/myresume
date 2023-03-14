import styled from 'styled-components';

export const LinkItem = styled.a`
  position: relative;
  color: #595a5a;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
  :hover,
  :focus {
    cursor: pointer;
    color: #8c52ff;
    font-weight: bold;
    svg {
      color: #8c52ff;
    }
    p {
      visibility: visible;
      opacity: 1;
    }
    div {
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

export const ContactWrapper = styled.div`
  display: none;
  position: fixed;
  padding: 0px;
  background-color: rgba(255, 255, 255, 0.8);
  right: 50px;
  padding: 8px;
  border-radius: 6px;
`;
