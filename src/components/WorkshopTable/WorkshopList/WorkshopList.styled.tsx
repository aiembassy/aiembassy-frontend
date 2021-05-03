import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';
import { ItemLink } from '@components/Projects/Projects.styled';

export const ScrollWrapper = styled.div``;

export const WorkshopListWrapper = styled.div<{ withoutScroll?: boolean }>`
    display: flex;
    flex-direction: column;
    height: ${({ withoutScroll }) =>
        withoutScroll ? '100%' : 'calc(100vh - 350px)'};
    width: ${({ withoutScroll }) =>
        withoutScroll ? '100%' : 'calc(100% + 50px)'};

    @media (max-width: 767px) {
        display: inline-flex;
        width: 100%;
    }

    // remove scroll x in table content
    .ps {
        @media (max-width: 767px) {
            overflow: hidden !important;
        }
    }
`;

export const TableRow = styled.div<{ landing?: boolean }>`
    border-top: 2px solid ${({ theme }) => theme.colors.white};
    display: grid;
    gap: ${({ landing }) => (landing ? 60 : 30)}px;
    grid-template-columns: 165px 1fr 135px 200px;
    margin-right: ${({ landing }) => (landing ? 0 : 50)}px;
    padding: 25px 0 5px;

    @media (max-width: 991px) {
        gap: 30px;
        grid-template-columns: 165px 1fr 135px 135px;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr 135px;
    }

    &:last-child {
        padding-bottom: 50px;
    }
`;

export const CellWrapper = styled.div`
    position: relative;

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
        justify-self: flex-end;
    }
`;

export const WorkshopName = styled(DefaultText)`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    .button-link {
        min-width: auto;
        width: 120px;
    }

    @media (max-width: 767px) {
        display: inline-flex;
        justify-content: flex-end;
    }
`;

export const LandingButtonWrapper = styled.div`
    display: inline-flex;
    margin: 0 auto;
`;

export const ArrowLink = styled(ItemLink)`
    margin-right: 20px;
    position: static;
`;
