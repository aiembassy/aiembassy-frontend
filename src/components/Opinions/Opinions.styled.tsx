import styled from 'styled-components';
import { Title, DefaultText } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const OpinionsWrapper = styled.div`
    padding-top: 125px;
    position: relative;

    @media (max-width: 991px) {
        padding-top: 60px;
    }

    @media (max-width: 767px) {
        padding: 45px 15px;
    }
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;

    @media (max-width: 991px) {
        margin-top: 0;
    }

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    }
`;

export const OpinionsList = styled.div`
    height: 500px;
    position: relative;
    width: 100%;
    z-index: 9;

    @media (max-width: 991px) {
        height: 450px;
    }
`;

export const OpinionItem = styled.div`
    align-items: flex-end;
    display: flex;
    line-height: 1.65;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const OpinionText = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: 1.65;
    margin-bottom: 0;
    margin-right: 120px;
    max-width: 750px;

    @media (max-width: 991px) {
        font-size: ${({ theme }) => theme.fontSizes.l}px;
    }

    @media (max-width: 767px) {
        margin-right: 30px;
    }
`;

export const OpinionSource = styled.a`
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.8;
    margin-bottom: 0;
    margin-right: 10px;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.yellow};

        svg path {
            fill: ${({ theme }) => theme.colors.yellow};
        }
    }

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

export const IconLink = styled(IconManager)`
    margin-left: 16px;
`;

export const SeparateDots = styled.div`
    display: flex;
    margin-left: -5px;
    padding: 40px 0;
`;

export const Dot = styled.div`
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: ${({ theme }) => theme.borderRadius.circle}%;
    height: 10px;
    margin: 0 5px;
    width: 10px;
`;

export const IconQuote = styled(IconManager)`
    left: 55%;
    position: absolute;
    top: -50px;
    transform: translateX(-50%);
`;
