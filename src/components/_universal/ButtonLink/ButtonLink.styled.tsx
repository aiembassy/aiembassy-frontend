import styled, { css } from 'styled-components';
import { ButtonTypes } from '@@types/CommonTypes';
import IconManager from '@components/_universal/IconManager/IconManager';
import { transparentize } from 'polished';

export const repeatableStyles = css`
    align-items: center;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.button}px;
    cursor: pointer;
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    height: 48px;
    justify-content: center;
    letter-spacing: 0.22em;
    outline: 0;
    padding: 0 15px;
    text-transform: uppercase;
`;

export const primaryButtonLink = css`
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

export const secondaryButtonLink = css`
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

export const errorButtonLink = css`
    ${repeatableStyles};
    background: ${({ theme }) => theme.colors.red};
`;

export const transparentButtonLink = css`
    ${repeatableStyles};
    background: transparent;
    height: auto;
`;

export const buttonVariant = {
    PRIMARY: primaryButtonLink,
    SECONDARY: secondaryButtonLink,
    ERROR: errorButtonLink,
    TRANSPARENT: transparentButtonLink,
};

export const ButtonHolder = styled.div`
    cursor: pointer;
`;

export const ButtonElement = styled.a<{
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
    margin-left: ${({ iconPositionLeft }) => (iconPositionLeft ? 0 : 16)}px;
    margin-right: ${({ iconPositionLeft }) => (iconPositionLeft ? 16 : 0)}px;
`;
