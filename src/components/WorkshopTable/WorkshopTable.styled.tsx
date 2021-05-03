import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const WorkshopTableWrapper = styled.div`
    @media (max-width: 767px) {
        overflow-x: auto;
    }
`;

export const TableHead = styled.div<{ landing?: boolean }>`
    display: grid;
    gap: ${({ landing }) => (landing ? 60 : 30)}px;
    grid-template-columns: 165px 1fr 135px 200px;

    @media (max-width: 991px) {
        gap: 30px;
        grid-template-columns: 165px 1fr 135px 135px;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 135px;
    }
`;

export const CellTitleWrapper = styled.div`
    &:nth-child(2) {
        @media (max-width: 767px) {
            display: none;
        }
    }

    &:nth-child(3) {
        @media (max-width: 767px) {
            display: none;
        }
    }

    &:last-child {
        @media (max-width: 767px) {
            display: none;
        }
    }
`;

export const TitleName = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 2;
`;
