import styled from 'styled-components';
import { Title } from '@shared/styles/typography.styled';

export const SupportWrapper = styled.div`
    padding-top: 150px;
    position: relative;

    @media (max-width: 991px) {
        padding-top: 60px;
    }

    @media (max-width: 767px) {
        padding-bottom: 30px;
        padding-top: 45px;
    }
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    }
`;

export const SupportList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -25px;
`;

export const SupportItem = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.circle}%;
    display: flex;
    height: 140px;
    justify-content: center;
    margin: 0 25px 30px;
    overflow: hidden;
    position: relative;
    width: 140px;
    z-index: 9;

    @media (max-width: 767px) {
        height: 110px;
        width: 110px;
    }
`;

export const ItemImage = styled.img<{ width: number }>`
    height: auto;
    width: ${({ width }) => width}px;
`;
