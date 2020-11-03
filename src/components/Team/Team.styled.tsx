import styled from 'styled-components';
import { Subtitle, DefaultText, Title } from '@shared/styles/typography.styled';

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;
    margin-top: 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    }
`;

export const TeamWrapper = styled.div`
    background: ${({ theme }) => theme.colors.bg_gray};
    padding: 90px 0;

    @media (max-width: 991px) {
        padding: 60px 0;
    }

    @media (max-width: 767px) {
        padding: 45px 0;
    }
`;

export const TeamSliderWrapper = styled.div`
    height: 100%;

    .swiper-container {
        overflow: visible;
    }
`;

export const TeamSliderInner = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const SliderNavigation = styled.div`
    position: absolute;
    right: 0;
    top: 45px;

    .swiper-button-disabled {
        svg {
            opacity: 0.5;
        }
    }
`;

export const ButtonPrev = styled.div`
    cursor: pointer;
    position: absolute;
    right: 65px;
    top: -25px;

    @media (max-width: 767px) {
        top: -30px;
    }
`;
export const ButtonNext = styled.div`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: -25px;

    @media (max-width: 767px) {
        top: -30px;
    }
`;

export const SliderContentWrapper = styled.div``;

export const MemberItem = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    display: flex;
    flex-direction: column;
    width: 360px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const MemberImage = styled.div`
    border: 5px solid ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.circle}%;
    height: 155px;
    margin: 0 auto 25px;
    overflow: hidden;
    position: relative;
    width: 155px;
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const MemberName = styled(Subtitle)`
    font-size: ${({ theme }) => theme.fontSizes.hero_subtitle}px;
    line-height: 1.75;
    margin-bottom: 0;
    margin-top: 0;
`;

export const MemberPosition = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 15px;
    opacity: 0.6;
`;

export const MemberDescription = styled(DefaultText)`
    line-height: 1.75;
    margin-bottom: 0;
    min-height: 115px;
`;

export const MemberSocial = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const SocialLink = styled.a`
    display: flex;
    margin: 0 25px;
`;

export const SummaryWrapper = styled.div`
    text-align: center;
    width: 100%;
`;

export const SummaryText = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    line-height: 1.65;
    margin: 80px auto 40px;
    max-width: 750px;
    text-align: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
