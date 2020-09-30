import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 300px);
    width: calc(100% + 50px);
`;

export const TableRow = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    margin-right: 50px;
    padding: 25px 0 5px;

    &:last-child {
        padding-bottom: 50px;
    }
`;

export const CellWrapper = styled.div`
    flex: 1;
    margin-right: 30px;
    &:nth-child(2) {
        flex: unset;
        width: 265px;
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
`;
