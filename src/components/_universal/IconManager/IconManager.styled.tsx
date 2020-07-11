import styled from "styled-components";

export const IconHolder = styled.div<{
  center?: boolean;
  rotate?: number;
  size: number;
}>`
  cursor: pointer;
  display: flex;
  font-size: ${({ size }) => size}px;
  ${({ center }) => center && `align-self: center;`};
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg)`};
`;
