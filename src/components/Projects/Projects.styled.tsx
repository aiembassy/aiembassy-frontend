import styled from 'styled-components';
import { Title, Subtitle, DefaultText } from '@shared/styles/typography.styled';
import { transparentize } from 'polished';
import IconManager from '@components/_universal/IconManager/IconManager';
import ButtonLinkAnimation from '@components/_universal/ButtonLinkAnimation/ButtonLinkAnimation';

export const ProjectsWrapper = styled.div`
    padding-bottom: 140px;
    padding-top: 150px;
    position: relative;

    @media (max-width: 991px) {
        padding-bottom: 60px;
        padding-top: 60px;
    }

    @media (max-width: 767px) {
        padding-bottom: 45px;
        padding-top: 45px;
    }
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
        margin-bottom: 30px;
    }
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectWrapper = styled.div`
    display: flex;
    margin-bottom: 25px;
    width: 100%;

    &:nth-child(2) {
        justify-content: flex-end;
    }

    &:nth-child(3) {
        justify-content: center;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const ProjectItem = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    box-shadow: 0 0 28px rgba(9, 90, 90, 0.1);
    cursor: pointer;
    display: flex;
    min-height: 240px;
    position: relative;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: calc(100% - 200px);

    @media (max-width: 991px) {
        width: calc(100% - 50px);
    }

    @media (max-width: 767px) {
        flex-direction: column;
        padding-bottom: 30px;
        width: 100%;
    }

    &:hover {
        box-shadow: 0 0 28px rgba(9, 90, 90, 0.25);
    }
`;

export const ItemImage = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    height: 240px;
    overflow: hidden;
    width: 240px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const ItemContent = styled.div`
    flex: 1;
    padding: 40px 30px;
`;

export const ItemInfo = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const ItemInfoInner = styled.div`
    display: flex;
`;

export const ItemService = styled(DefaultText)`
    color: ${transparentize(0.4, '#3B4949')};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    margin-bottom: 0;
`;

export const ItemDate = styled(DefaultText)`
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
        top: 9px;
        width: 4px;
    }
`;

export const ItemLinkWrapper = styled.div`
    display: flex;
    margin-right: 12px;
`;

export const ItemLink = styled(ButtonLinkAnimation)`
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.button}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 0.22em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all ${({ theme }) => theme.transitions.default}s;

    &:hover {
        color: ${({ theme }) => theme.colors.green_hover};
    }

    @media (max-width: 767px) {
        bottom: 15px;
        right: 15px;
        margin-right: 12px;
        position: absolute;
    }
`;

export const IconLink = styled(IconManager)`
    display: flex;
    margin-left: 18px;
`;

export const ItemTitle = styled(Subtitle)`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.65;
    margin: 0 0 10px;
    max-width: 555px;
`;

export const ItemText = styled(DefaultText)`
    line-height: 1.65;
    max-width: 555px;
    margin: 0;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;

    @media (max-width: 767px) {
        margin-top: 45px;
    }
`;
