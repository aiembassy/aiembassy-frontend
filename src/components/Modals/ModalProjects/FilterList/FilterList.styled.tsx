import styled from 'styled-components';
import { Subtitle, DefaultText } from '@shared/styles/typography.styled';
import { transparentize } from 'polished';
import IconManager from '@components/_universal/IconManager/IconManager';
import ButtonLinkAnimation from '@components/_universal/ButtonLinkAnimation/ButtonLinkAnimation';

export const FilterListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 350px);
    margin-top: 40px;
    position: relative;
    width: calc(100% + 50px);

    @media (max-width: 991px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        height: 100%;
        min-height: 100%;
        width: calc(100% + 50px);

        div > div > div {
            height: auto !important;
            position: static !important;
        }
    }

    // remove scroll x in table content
    .ps {
        @media (max-width: 767px) {
            overflow: inherit !important;
        }
    }
`;

export const Card = styled('div')`
    margin-bottom: 25px;
    width: calc(100% - 50px) !important;
`;

export const CardItem = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;

export const CardInner = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    box-shadow: 0 0 15px rgba(9, 90, 90, 0.05);
    cursor: pointer;
    display: flex;
    min-height: 240px;
    overflow: hidden;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: 100%;

    @media (max-width: 767px) {
        flex-direction: column;
        padding-bottom: 30px;
    }

    &:hover {
        box-shadow: 0 0 15px rgba(9, 90, 90, 0.15);
    }
`;

export const CardImage = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    height: 240px;
    overflow: hidden;
    width: 240px;

    @media (max-width: 991px) {
        height: 100%;
    }

    @media (max-width: 767px) {
        height: 200px;
        width: 100%;
    }
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const CardContent = styled.div`
    flex: 1;
    padding: 40px 30px;
`;

export const CardInfo = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const CardInfoInner = styled.div`
    display: flex;
`;

export const CardService = styled(DefaultText)`
    color: ${transparentize(0.4, '#3B4949')};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 0;
`;

export const CardDate = styled(DefaultText)`
    color: ${transparentize(0.4, '#3B4949')};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 0;
    margin-left: 30px;
    position: relative;

    &:before {
        background: #8a9292;
        border-radius: 50%;
        content: '';
        height: 4px;
        left: -16px;
        position: absolute;
        top: 8px;
        width: 4px;
    }
`;

export const CardLinkWrapper = styled.div`
    display: flex;
`;

export const CardLink = styled(ButtonLinkAnimation)`
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.22em;
    margin-right: 12px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all ${({ theme }) => theme.transitions.default}s;

    @media (max-width: 767px) {
        bottom: 15px;
        position: absolute;
        right: 30px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }
`;

export const IconLink = styled(IconManager)`
    display: flex;
    margin-left: 18px;
`;

export const CardTitle = styled(Subtitle)`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.65;
    margin: 0 0 10px;
    max-width: 555px;
`;

export const CardText = styled(DefaultText)`
    line-height: 1.65;
    max-width: 480px;
    margin: 0;
`;
