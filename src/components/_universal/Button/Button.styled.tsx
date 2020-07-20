import styled, { css } from 'styled-components';
import { ButtonTypes } from '@@types/CommonTypes';
import IconManager from '@components/_universal/IconManager/IconManager';

export const primaryButton = css`
    background: red;
`;
export const secondaryButton = css`
    background: blue;
`;
export const errorButton = css`
    background: yellow;
`;

export const buttonVariant = {
    PRIMARY: primaryButton,
    SECONDARY: secondaryButton,
    ERROR: errorButton,
};

export const ButtonHolder = styled.div`
    cursor: pointer;
`;

export const ButtonElement = styled.button<{ buttonType: ButtonTypes }>`
    ${({ buttonType }) => buttonType && buttonVariant[buttonType]}

    &:hover,
    &:focus,
    &:active {
        outline: none;
    }
`;

export const StyledIconManager = styled(IconManager)``;
