import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const SupportList = styled.div``;

export const SupportItem = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 40px 0 20px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const ItemIcon = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 175px;
`;

export const IconName = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: center;
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 30px;
`;

export const Text = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.m}px;
`;
