import styled from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';

export const LandingWorkshopsWrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    padding: 100px 0 160px;

    @media (max-width: 1199px) {
        padding: 60px 0 60px;
    }

    @media (max-width: 991px) {
        padding: 45px 0 45px;
    }
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 15px;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
        margin-top: 0;
    }
`;

export const SectionDescription = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: 1.65;
    margin-bottom: 70px;
    max-width: 750px;

    @media (max-width: 767px) {
        margin-bottom: 50px;
    }
`;
