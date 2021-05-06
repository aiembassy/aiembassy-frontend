import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const TrainerCardWrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 44px 32px 54px;
    width: 360px;

    @media (max-width: 767px) {
        margin-top: 30px;
        width: 100%;
    }
`;

export const TrainerCardTitle = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 36px;
`;

export const TrainerPhoto = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Photo = styled.img`
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.circle}px;
    border: 4px solid ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100px;
`;

export const TrainerName = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.hero_subtitle}px;
    text-align: center;
    margin: 0;
`;

export const TrainerPosition = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 18px;
    opacity: 0.6;
    text-align: center;
`;

export const TrainerBio = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    margin-bottom: 50px;
    text-align: center;
`;

export const TrainerSocial = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const SocialLink = styled.a`
    margin: 0 24px;
`;
