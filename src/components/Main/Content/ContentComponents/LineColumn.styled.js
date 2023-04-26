import styled from 'styled-components';

export const LineColumnStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LineStyled = styled.span`
  display: block;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  border: #595a5a solid 3px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const CircleStyled = styled.span`
  display: block;
  width: 2px;
  height: 95%;
  background-color: #595a5a;
  position: relative;
  z-index: 1;
`;

export const IconGitStyled = styled.span`
  display: block;
  position: absolute;
  top: -1px;
  right: -1px;
  z-index: 2;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    color: #8c52ff;
  }
`;
