import styled, { css } from 'styled-components';
import { DefaultText, Title, Subtitle } from '@shared/styles/typography.styled';
import { transparentize } from 'polished';
import IconManager from '@components/_universal/IconManager/IconManager';

export const globalBoxStyles = css`
    background: ${transparentize(0.8, '#f6f6f6')};
    box-shadow: 0 0 28px rgba(9, 90, 90, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
`;

export const AboutWrapper = styled.div`
    padding-top: 125px;
    position: relative;
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 15px;
`;

export const SectionDescription = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: 1.65;
    margin-bottom: 70px;
    max-width: 750px;
`;

export const BoxList = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
`;

export const BoxListInner = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - 15px);
`;

export const BoxItemSmall = styled.div`
    ${globalBoxStyles};
    margin-bottom: 30px;
    padding: 55px 75px 65px 55px;
    position: relative;
    z-index: 9;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const BoxItemBig = styled.div`
    ${globalBoxStyles};
    padding: 75px 75px 90px 55px;
    position: relative;
    z-index: 9;
`;

export const BoxTitle = styled(Subtitle)`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.65;
    margin-bottom: 20px;
    max-width: 750px;
`;

export const BoxDescription = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    line-height: 1.65;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SummaryWrapper = styled.div`
    text-align: center;
    width: 100%;
`;

export const SummaryText = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    line-height: 1.65;
    margin: 125px auto 40px;
    max-width: 750px;
    text-align: center;
`;

export const IconA = styled(IconManager)`
    top: 470px;
    left: -100px;
    position: absolute;
`;

export const IconI = styled(IconManager)`
    bottom: -80px;
    left: 395px;
    position: absolute;
`;

export const IconE = styled(IconManager)`
    position: absolute;
    right: 50px;
    top: 150px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
