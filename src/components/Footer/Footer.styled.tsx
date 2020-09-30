import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`;

export const FooterCopyrights = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 0;
`;

export const FooterLinks = styled.div`
    display: flex;
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    display: inline;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-right: 32px;
    position: relative;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }

    &:after {
        background: ${({ theme }) => theme.colors.text};
        border-radius: ${({ theme }) => theme.borderRadius.circle}%;
        content: '';
        height: 5px;
        position: absolute;
        right: -18px;
        top: 6px;
        width: 5px;
    }

    &:last-child {
        margin-right: 0;

        &:after {
            display: none;
        }
    }
`;

export const FooterSocials = styled.div`
    display: flex;
`;

export const LinkWrapper = styled.a``;

export const Facebook = styled(IconManager)`
    margin-right: 38px;
`;

export const Twitter = styled(IconManager)`
    margin-right: 40px;
`;

export const LinkedIn = styled(IconManager)``;