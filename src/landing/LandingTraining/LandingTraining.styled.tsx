import styled from 'styled-components';
import { BigTitle, DefaultText } from '@shared/styles/typography.styled';
import { Container } from '@shared/styles/global.styled';

export const LandingTrainingWrapper = styled.div`
    padding-top: 140px;
    width: 100%;
`;

export const LandingTrainingInner = styled(Container)`
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const TrainingCategory = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    opacity: 0.6;
`;

export const TrainingTitle = styled(BigTitle)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.hero}px;
    line-height: 1.5;
    margin: 0;
    max-width: 750px;

    @media (max-width: 991px) {
        font-size: ${({ theme }) => theme.fontSizes.section_title}px;
    }

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.hero_subtitle}px;
    }
`;

export const TrainingImageWrapper = styled.div`
    margin: 44px auto 100px;
    text-align: center;
`;

export const TrainingImage = styled.img`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    max-width: 100%;
`;

export const TrainingText = styled(DefaultText)`
    -moz-column-count: 2;
    -moz-column-gap: 32px;
    -webkit-column-count: 2;
    -webkit-column-gap: 32px;
    color: ${({ theme }) => theme.colors.text};
    column-count: 2;
    column-gap: 32px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    line-height: 1.75;
    margin-bottom: 0;
    max-width: 960px;

    @media (max-width: 767px) {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }
`;
