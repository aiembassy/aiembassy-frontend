import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const TableWrapper = styled.div`
    @media (max-width: 767px) {
        overflow-x: auto;
    }
`;

export const TableHead = styled.div`
    display: flex;

    @media (max-width: 767px) {
        display: inline-flex;
    }
`;

export const CellTitleWrapper = styled.div`
    flex: 1;
    margin-right: 30px;

    &:first-child {
        flex: unset;
        width: 165px;
    }

    &:nth-child(2) {
        flex: unset;
        width: 265px;

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
        margin-right: 0;

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
