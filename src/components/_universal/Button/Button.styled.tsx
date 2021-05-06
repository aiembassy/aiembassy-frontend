import styled, { css } from 'styled-components';
import { ButtonTypes } from '@@types/CommonTypes';
import IconManager from '@components/_universal/IconManager/IconManager';
import { transparentize } from 'polished';

export const repeatableStyles = css`
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: 48px;
    letter-spacing: 0.22em;
    outline: 0;
    padding: 0 15px;
    text-transform: uppercase;
`;

export const primaryButton = css`
    ${repeatableStyles};
    background: linear-gradient(180deg, #287871 0%, #006666 100%);
    color: ${({ theme }) => theme.colors.yellow};
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    min-width: 165px;
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default}s;

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
        color: ${({ theme }) => theme.colors.white};
        &:after {
            background: ${({ theme }) => theme.colors.green_hover};
        }
    }
`;

export const secondaryButton = css`
    ${repeatableStyles};
    background: ${({ theme }) => theme.colors.transparent};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        background: ${({ theme }) => transparentize(0.9, theme.colors.bg)};
    }
`;

export const tertiaryButtonLink = css`
    ${repeatableStyles};
    background: ${({ theme }) => theme.colors.transparent};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        background: ${({ theme }) => transparentize(0.9, theme.colors.yellow)};
    }
`;

export const errorButton = css`
    ${repeatableStyles};
    background: ${({ theme }) => theme.colors.red};
`;

export const transparentButton = css`
    ${repeatableStyles};
    background: transparent;
    height: auto;
`;

export const buttonVariant = {
    PRIMARY: primaryButton,
    SECONDARY: secondaryButton,
    TETRIARY: tertiaryButtonLink,
    ERROR: errorButton,
    TRANSPARENT: transparentButton,
};

export const ButtonHolder = styled.div`
    cursor: pointer;
`;

export const ButtonElement = styled.button<{
    buttonType: ButtonTypes;
    noPadding?: boolean;
    width?: number;
}>`
    ${({ buttonType }) => buttonType && buttonVariant[buttonType]}
    ${({ noPadding }) => noPadding && `padding: 0`};
    ${({ width }) => width && `width: ${width}px`};

    &:hover,
    &:focus,
    &:active {
        outline: none;
    }
`;

export const ButtonText = styled.span`
    position: relative;
    z-index: 9;
`;

export const StyledIconManager = styled(IconManager)<{
    width?: number;
    iconPositionLeft: boolean;
}>`
    ${({ width }) => width && `width: ${width}px`};
    //margin-left: ${({ iconPositionLeft }) => (iconPositionLeft ? 0 : 16)}px;
    // margin-right: ${({ iconPositionLeft }) => (iconPositionLeft ? 16 : 0)}px;
`;
