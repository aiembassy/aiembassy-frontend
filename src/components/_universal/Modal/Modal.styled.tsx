import styled from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';
import ButtonLink from '../ButtonLink/ButtonLink';
import Button from '../Button/Button';

export const ModalWrapper = styled.div`
    background-color: rgba(11, 61, 59, 0.9);
    height: 100%;
    left: 0;
    //overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const ModalComponent = styled.div<{
    smallModal?: boolean;
}>`
    background: ${({ theme }) => theme.colors.white};
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transition: transform ${({ theme }) => theme.transitions.modal}s;
    width: ${({ smallModal }) => (smallModal ? 865 : 1055)}px;
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
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    top: 30px;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }
`;

export const IconClose = styled(Button)`
    position: absolute;
    top: 30px;
    right: 45px;
`;

export const ModalInner = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ModalInfo = styled.div`
    padding: 60px 100px 40px;
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme.colors.bg};
    flex: 1;
    padding: 40px 100px;
`;

export const ModalTitle = styled(Title)`
    font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    margin-bottom: 10px;
    margin-top: 0;
    line-height: 1.45;
`;

export const ModalDescription = styled(DefaultText)<{
    smallModal?: boolean;
}>`
    line-height: 1.75;
    margin-bottom: 0;
    max-width: ${({ smallModal }) => (smallModal ? 555 : 750)}px;
`;
