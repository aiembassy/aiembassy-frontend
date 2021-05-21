import styled, { css } from 'styled-components';

export const landingCss = css`
    color: ${({ theme }) => theme.colors.text};
`;

export const LanguageSwitchWrapper = styled.div<{ landing: boolean }>`
    align-items: center;
    color: ${({ theme, landing }) =>
        landing ? theme.colors.text : theme.colors.white};
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    margin-left: 50px;

    @media (max-width: 1199px) {
        margin-left: 0;
        margin-right: 70px;
    }
`;

export const LangLink = styled.a<{ active?: boolean; landing: boolean }>`
    color: ${({ theme, active }) =>
        active ? theme.colors.yellow : theme.colors.gray};
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    text-decoration: none;
    ${({ landing, active }) => landing && active && landingCss};
`;

export const Pipe = styled.span`
    color: ${({ theme }) => theme.colors.gray};
    display: inline-block;
    margin: 0 16px;
`;
