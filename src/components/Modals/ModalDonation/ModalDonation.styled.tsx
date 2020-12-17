import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const SupportList = styled.div``;

export const SupportItem = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 40px 0 20px;

    @media (max-width: 767px) {
        flex-direction: column;
    }

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

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const ImageIcon = styled.img``;

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

    @media (max-width: 767px) {
        padding-left: 0;
    }
`;

export const Text = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.m}px;
`;
