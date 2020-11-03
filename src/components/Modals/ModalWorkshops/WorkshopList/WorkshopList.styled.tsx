import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 300px);
    width: calc(100% + 50px);

    @media (max-width: 767px) {
        display: inline-flex;
    }

    // remove scroll x in table content
    .ps {
        @media (max-width: 767px) {
            overflow: inherit !important;
        }
    }
`;

export const TableRow = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    margin-right: 50px;
    padding: 25px 0 5px;

    &:last-child {
        padding-bottom: 50px;
    }

    @media (max-width: 767px) {
        display: inline-flex;
    }
`;

export const CellWrapper = styled.div`
    flex: 1;
    margin-right: 30px;

    @media (max-width: 767px) {
        width: 165px;
    }

    &:nth-child(2) {
        flex: unset;
        width: 265px;
    }

    &:nth-child(3) {
        @media (max-width: 767px) {
            margin-right: 0;
            width: 165px;
        }
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const WorkshopName = styled(DefaultText)`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    .button-link {
        min-width: auto !important;
        width: 120px !important;
    }
`;
