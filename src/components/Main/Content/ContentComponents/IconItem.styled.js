import styled from 'styled-components';

export const IconStyled = styled.span`
  display: block;
  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 2;
`;

export const IconSandStyled = styled.span`
  display: block;
  position: absolute;
  top: 1px;
  right: 1px;
  z-index: 2;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    color: #90ee90;
  }
`;
