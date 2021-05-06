import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';

export const SummaryWrapper = styled.div`
    text-align: center;
    width: 100%;
`;

export const SummaryText = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    margin: 85px auto 40px;
    max-width: 650px;
    text-align: center;

    @media (max-width: 575px) {
        margin-top: 50px;
    }
`;

export const ButtonWrapper = styled.div`
    display: inline-flex;
    margin: 0 auto;
`;
