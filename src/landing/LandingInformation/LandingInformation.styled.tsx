import styled from 'styled-components';
import { Container } from '@shared/styles/global.styled';

export const LandingInformationWrapper = styled.div`
    padding: 100px 0 140px;
    width: 100%;

    @media (max-width: 1199px) {
        padding: 60px 0 60px;
    }

    @media (max-width: 991px) {
        padding: 45px 0 45px;
    }
`;

export const LandingInformationInner = styled(Container)`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
    }
`;

export const LandingInformationContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ListsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;

    @media (max-width: 767px) {
        margin-right: 0;
    }
`;
