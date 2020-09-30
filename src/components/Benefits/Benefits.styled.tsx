import styled from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const BenefitsWrapper = styled.div`
    padding-top: 170px;
    position: relative;
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 65px;
`;

export const DotsBg = styled(IconManager)`
    position: absolute;
    right: 0;
    top: -25%;
`;

export const StepsWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const StepWrapper = styled.div`
    flex: 1;
    position: relative;
`;

export const StepInner = styled.div`
    align-items: center;
    display: flex;
    height: 160px;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-60%, -50%);
    width: 175px;
`;

export const StepIcon = styled.div`
    align-items: center;
    display: flex;
    height: 45px;
`;

export const StepText = styled(DefaultText)`
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    line-height: 1.65;
    margin-bottom: 0;
    margin-top: 20px;
    text-align: center;
`;
