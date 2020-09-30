import styled from 'styled-components';
import { Title } from '@shared/styles/typography.styled';

export const SupportWrapper = styled.div`
    padding-top: 150px;
    position: relative;
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;
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
    position: relative;
    width: 140px;
    z-index: 9;
`;

export const ItemImage = styled.img<{ width: number }>`
    height: auto;
    width: ${({ width }) => width}px;
`;
