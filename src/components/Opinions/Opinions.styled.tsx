import styled from 'styled-components';
import { Title, DefaultText } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const OpinionsWrapper = styled.div`
    padding-top: 125px;
    position: relative;
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 50px;
`;

export const OpinionsList = styled.div`
    height: 500px;
    position: relative;
    width: 100%;
`;

export const OpinionItem = styled.div`
    align-items: flex-end;
    display: flex;
    line-height: 1.65;
`;

export const OpinionText = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: 1.65;
    margin-bottom: 0;
    margin-right: 120px;
    max-width: 750px;
`;

export const OpinionSource = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.8;
    margin-bottom: 0;
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
