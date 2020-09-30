import styled from 'styled-components';
import * as React from 'react';

export const IconHolder = styled.div<{
    center?: boolean;
    rotate?: number;
    size: number;
}>`
    display: flex;
    font-size: ${({ size }) => size}px;
    ${({ center }) => center && `align-self: center;`};
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg)`};
`;
