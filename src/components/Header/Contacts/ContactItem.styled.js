import styled from 'styled-components';

export const LinkItem = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    margin-left: auto;
    flex: 0 1 10%;
    :hover,
    :focus {
      p,
      a {
        visibility: visible;
        opacity: 1;
      }
      a {
        display: flex;
      }
    }
  }

  &:hover {
    cursor: pointer;
    color: var(--accent);
    font-weight: bold;

    svg {
      color: var(--accent);
    }
  }
`;

export const StyledItem = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
  }
  display: flex;
`;

export const IconWrapper = styled.span`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-sidebar);
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
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-sidebar);
  margin: 2px 8px 2px 2px;
  border-radius: 4px;
  padding: 0px;
  width: 36px;
  height: 36px;
  svg {
    color: var(--text-sidebar);
    display: block;
    padding: 4px;
  }
`;

export const ContactTitleText = styled.p`
  @media screen and (max-width: 767px) {
    visibility: hidden;
    opacity: 0;
    color: var(--bg-sidebar);
    font-size: 14px;
    font-weight: bold;
    line-height: 120%;
  }
  color: var(--bg-sidebar);
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;
`;

export const ContactText = styled.p`
  @media screen and (max-width: 767px) {
    visibility: hidden;
    opacity: 0;
    font-size: 14px;
    line-height: 110%;
  }
  font-size: 16px;
  line-height: 110%;
`;

export const ContactWrapper = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
    position: fixed;
    color: var(--accent);
    font-weight: 500;
    line-height: 140%;
    text-decoration: none;
    padding: 0px;
    background-color: rgba(255, 255, 255, 0.85);
    right: 50px;
    padding: 8px;
    border-radius: 6px;
  }
  color: var(--text-title);
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: var(--accent);
  }
`;
