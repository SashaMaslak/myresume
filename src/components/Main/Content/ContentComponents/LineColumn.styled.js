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
`;

export const CircleStyled = styled.span`
  display: block;
  width: 2px;
  height: 100%;
  background-color: #595a5a;
`;
