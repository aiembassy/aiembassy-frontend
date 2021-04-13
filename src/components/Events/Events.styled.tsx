import styled from 'styled-components';
import { DefaultText, Subtitle, Title } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import { ItemLink } from '@components/Projects/Projects.styled';

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
        line-height: 1.45;
        margin-bottom: 0;
    }

    @media (max-width: 575px) {
        padding-right: 50px;
    }
`;

export const EventsWrapper = styled.div`
    overflow-x: hidden;
    padding: 130px 0 140px;
    position: relative;

    @media (max-width: 991px) {
        padding-bottom: 60px;
        padding-top: 0;
    }
`;

export const DotsBg = styled(IconManager)`
    left: -40px;
    position: absolute;
    top: -30%;
`;

export const EventsSliderWrapper = styled.div`
    height: 100%;

    .swiper-container {
        margin-bottom: 50px;
        margin-top: 100px;
        overflow: visible;
    }
`;

export const SliderNavigation = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .swiper-button-disabled {
        svg {
            opacity: 0.5;
        }
    }
`;

export const ButtonPrev = styled.div`
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: -18px;

    @media (max-width: 767px) {
        top: 0;
    }
`;
export const ButtonNext = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: -18px;

    @media (max-width: 767px) {
        top: 0;
    }
`;

export const SliderContentWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 35px 25px;
`;

export const EventsSliderInner = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const SliderItem = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 475px;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: 360px;

    @media (max-width: 767px) {
        width: auto;
    }

    &:hover {
        box-shadow: 0 0 28px rgba(9, 90, 90, 0.15);
    }
`;

export const SliderImage = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    height: 125px;
    margin: -50px auto 50px;
    overflow: hidden;
    position: relative;
    width: 185px;
`;

export const Image = styled.img`
    height: 100%;
    object-fit: contain;
    width: 100%;
`;

export const PostData = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 1.75;
    margin-bottom: 12px;
    opacity: 0.6;
`;

export const PostTitle = styled(Subtitle)`
    font-weight: bold;
    line-height: 1.75;
    margin-bottom: 6px;
    margin-top: 0;
`;

export const PostDescription = styled(DefaultText)`
    line-height: 1.75;
    flex: 1;
`;

export const PostLinkWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
`;

export const PostLink = styled(ItemLink)`
    margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
