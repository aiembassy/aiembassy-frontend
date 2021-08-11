import styled from 'styled-components';
import { Container } from '@shared/styles/global.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import { DefaultText } from '@shared/styles/typography.styled';
import Button from '@components/_universal/Button/Button';
import { ButtonText } from '@components/_universal/Button/Button.styled';

export const ContactWrapper = styled.div`
    display: flex;
    height: 650px;
    position: relative;
    width: 100%;

    @media (max-width: 767px) {
        height: 950px;
    }
`;

export const ContainerWrapper = styled(Container)`
    background: ${({ theme }) => theme.colors.bg_gray};
    height: 100%;
    left: 50%;
    margin: 0 15px;
    position: absolute;
    top: 0;
    transform: translateX(-50%);

    @media (max-width: 1199px) {
        margin: 0;
    }
`;

export const ContactBgImage = styled.div`
    background-image: url('/images/contact_bg.png');
    border-bottom-right-radius: 70px;
    border-top-right-radius: 70px;
    background-position: center right;
    background-size: cover;
    height: 425px;
    position: relative;
    top: 170px;
    width: 50%;

    @media (max-width: 991px) {
        width: 55%;
    }

    @media (max-width: 767px) {
        height: 400px;
        width: calc(100% - 15px);
    }
`;

export const ContactBg = styled.div`
    background: ${({ theme }) => theme.colors.bg_gray};
    width: 50%;

    @media (max-width: 767px) {
        width: 0;
    }
`;

export const IconBrand = styled(IconManager)`
    padding: 50px 0 40px 90px;

    @media (max-width: 1199px) {
        margin: 0 auto;
        padding-left: 15px;
        width: 960px;
    }

    @media (max-width: 991px) {
        width: 720px;
    }

    @media (max-width: 767px) {
        padding-left: 0;
        width: 540px;
    }

    @media (max-width: 575px) {
        width: 100%;
    }
`;

export const ContainerInner = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.colors.transparent};
    display: flex;
    height: 425px;
    left: 50%;
    position: absolute;
    top: 170px;
    transform: translateX(-50%);
    width: 1140px;
    z-index: 999;

    @media (max-width: 1199px) {
        width: 960px;
    }

    @media (max-width: 991px) {
        width: 720px;
    }

    @media (max-width: 767px) {
        width: 540px;
    }

    @media (max-width: 575px) {
        width: 100%;
    }
`;

export const TitleBox = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.75;
    margin-bottom: 15px;
`;

export const TextBox = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.75;
    margin-bottom: 30px;
`;

export const Text = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.75;
    margin: 10px 0;
`;

export const InfoBox = styled.div`
    padding-left: 100px;
    width: 50%;

    @media (max-width: 1199px) {
        padding-left: 15px;
    }

    @media (max-width: 767px) {
        padding-left: 0;
        width: 100%;
    }

    @media (max-width: 575px) {
        padding: 0 15px;
    }

    &:last-child {
        padding-left: 70px;

        @media (max-width: 1199px) {
            padding-right: 15px;
        }

        @media (max-width: 991px) {
            padding-left: 60px;
        }

        @media (max-width: 767px) {
            padding-left: 0;
            position: absolute;
            top: 440px;
            width: 100%;
        }

        @media (max-width: 575px) {
            padding: 0 15px;
        }

        & ${TitleBox}, & ${TextBox} {
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;

export const Icon = styled(IconManager)``;

export const MailToLink = styled.a`
    align-items: center;
    color: ${({ theme }) => theme.colors.yellow};
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    line-height: 1.75;
    margin: 10px 0;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.white};

        .IconMail path {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    & ${Icon} {
        margin-right: 15px;
    }
`;

export const LinkWrapper = styled.div``;

export const OpenFormButton = styled(Button)`
    display: flex;
    letter-spacing: 0;
    padding: 0;
    text-transform: none;

    & ${ButtonText} {
        align-items: center;
        color: ${({ theme }) => theme.colors.yellow};
        display: flex;
        font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
        transition: all ${({ theme }) => theme.transitions.default}s;
    }

    &:hover {
        & ${ButtonText} {
            color: ${({ theme }) => theme.colors.white};
        }

        .IconContact path {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    & ${Icon} {
        margin-right: 15px;
    }
`;

export const ButtonWrapper = styled.div`
    margin: 10px auto 0;
`;
