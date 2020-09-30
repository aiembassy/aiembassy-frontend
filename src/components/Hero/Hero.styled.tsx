import styled from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import { Container } from '@shared/styles/global.styled';

export const HeroWrapper = styled.div`
    background-image: url('/images/hero.png');
    border-bottom-left-radius: 50px;
    background-size: cover;
    height: 665px;
    padding-top: 100px;
    width: 100%;
`;

export const Header = styled.div`
    background: ${({ theme }) => theme.colors.transparent};
    padding: 0;
    position: fixed;
    top: 0;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: 100%;
    z-index: 99;

    &.scrolling {
        background: ${({ theme }) => theme.colors.green_hover};
    }

    ${Container} {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
`;

export const LinkWrapper = styled.a``;

export const HeroTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.hero}px;
    line-height: 1.5;
    margin-bottom: 15px;
    margin-top: 100px;
    max-width: 750px;
`;

export const HeroSubtitle = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.hero_subtitle}px;
    margin-bottom: 40px;
    max-width: 650px;
`;

export const ButtonWrapper = styled.div`
    width: 280px;
`;

export const CircleGreen = styled(IconManager)`
    bottom: 30px;
    position: absolute;
    right: 600px;
    z-index: 9;
`;

export const CircleWhite = styled(IconManager)`
    bottom: 280px;
    position: absolute;
    right: 100px;
    z-index: 9;
`;

export const HeroSmallImage = styled.div`
    background-image: url('/images/hero_image_3.png');
    background-size: cover;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    bottom: 120px;
    height: 150px;
    position: absolute;
    right: 0;
    width: 130px;
`;

export const HeroMiddleImage = styled.div`
    background-image: url('/images/hero_image_1.png');
    background-size: cover;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    bottom: 45px;
    height: 160px;
    position: absolute;
    right: 450px;
    width: 225px;
    z-index: 9;
`;

export const HeroBigImage = styled.div`
    background-image: url('/images/hero_image_2.png');
    background-size: cover;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    bottom: 10px;
    height: 310px;
    position: absolute;
    right: 140px;
    width: 355px;
`;
