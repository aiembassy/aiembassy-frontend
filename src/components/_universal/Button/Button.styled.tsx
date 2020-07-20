import styled, { css } from 'styled-components';
import { ButtonTypes } from '@@types/CommonTypes';
import IconManager from '@components/_universal/IconManager/IconManager';

export const repeatableStyles = css`
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: 48px;
    letter-spacing: 0.22em;
    outline: 0;
    text-transform: uppercase;
`;

export const primaryButton = css`
    ${repeatableStyles};
    background: linear-gradient(180deg, #287871 0%, #006666 100%);
    color: ${({ theme }) => theme.colors.yellow};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    min-width: 165px;
    position: relative;

    // transition gradient button
    &:after {
        background: transparent;
        border-radius: ${({ theme }) => theme.borderRadius.button}px;
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        transition: all ${({ theme }) => theme.transitions.default}s;
        width: 100%;
    }

    &:hover {
        &:after {
            background: ${({ theme }) => theme.colors.green_hover};
        }
    }
`;

export const secondaryButton = css`
    ${repeatableStyles};
`;

export const errorButton = css`
    ${repeatableStyles};
    background: ${({ theme }) => theme.colors.red};
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

export const ButtonText = styled.div`
    position: relative;
    z-index: 9;
`;

export const StyledIconManager = styled(IconManager)``;
