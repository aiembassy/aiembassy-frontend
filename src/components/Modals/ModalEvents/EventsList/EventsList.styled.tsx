import styled from 'styled-components';
import { DefaultText, Subtitle } from '@shared/styles/typography.styled';
import { ItemLink } from '@components/Projects/Projects.styled';

export const EventsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 300px);
    width: calc(100% + 50px);

    > div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Event = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    display: flex;
    flex-direction: column;
    height: 475px;
    margin: 50px 0 30px;
    width: calc(50% - 40px);

    &:nth-child(n + 3) {
        margin-top: -100px;
    }

    &:nth-child(2n) {
        margin-right: 50px;
        margin-top: 100px;
    }

    &:nth-child(2) {
        margin-top: 250px;
    }
`;

export const EventImage = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    height: 125px;
    margin: -50px auto 50px;
    overflow: hidden;
    position: relative;
    width: 165px;
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const EventContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 35px 25px;
`;

export const EventDate = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 1.75;
    margin-bottom: 12px;
    opacity: 0.6;
`;

export const EventTitle = styled(Subtitle)`
    font-weight: bold;
    line-height: 1.75;
    margin-bottom: 6px;
    margin-top: 0;
`;

export const EventDescription = styled(DefaultText)`
    flex: 1;
    line-height: 1.75;
    margin-bottom: 0;
`;

export const EventLinkWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const EventLink = styled(ItemLink)``;
