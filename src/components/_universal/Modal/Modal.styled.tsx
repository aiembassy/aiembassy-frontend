import styled, { css } from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';

export const linkStyleCss = css`
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    display: inline;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    position: relative;
    text-decoration: underline;
    text-underline-position: under;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }
`;

export const ModalWrapper = styled.div`
    background-color: rgba(11, 61, 59, 0.9);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const ModalComponent = styled.div<{
    smallModal?: boolean;
    overflowXHidden?: boolean;
}>`
    background: ${({ theme }) => theme.colors.white};
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transition: transform ${({ theme }) => theme.transitions.modal}s;
    width: ${({ smallModal }) => (smallModal ? 865 : 1055)}px;

    @media (max-width: 991px) {
        overflow-x: hidden;
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;

export const PrevButton = styled(ButtonLink)`
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    left: 65px;
    letter-spacing: 0.22em;
    line-height: 1.3;
    position: absolute;
    text-decoration: none;
    text-transform: uppercase;
    top: 35px;
    transition: all ${({ theme }) => theme.transitions.default}s;

    @media (max-width: 991px) {
        left: 30px;
    }

    @media (max-width: 767px) {
        padding-right: 45px;
    }

    @media (max-width: 575px) {
        top: 25px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }
`;

export const IconClose = styled(Button)`
    margin-left: 0;
    position: absolute;
    right: 45px;
    top: 30px;
`;

export const ModalInner = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 767px) {
        height: auto;
        min-height: 100%;
    }
`;

export const ModalInfo = styled.div`
    padding: 70px 100px 40px;

    @media (max-width: 991px) {
        padding: 75px 50px 30px 30px;
    }
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    flex: 1;
    padding: 40px 100px 0;

    @media (max-width: 991px) {
        padding: 30px 30px 0;
    }

    @media (max-width: 767px) {
        min-height: 100%;
        padding-bottom: 30px;
    }
`;

export const ModalTitle = styled(Title)`
    font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    margin-bottom: 10px;
    margin-top: 0;
    line-height: 1.45;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.hero_subtitle}px;
    }
`;

export const ModalDescription = styled(DefaultText)<{
    smallModal?: boolean;
}>`
    line-height: 1.75;
    margin-bottom: 0;
    max-width: ${({ smallModal }) => (smallModal ? 555 : 750)}px;

    a {
        ${linkStyleCss}
    }
`;
