import styled from 'styled-components';
import { DefaultText, Title } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const BenefitsWrapper = styled.div`
    padding-top: 170px;
    position: relative;

    @media (max-width: 1199px) {
        padding-top: 60px;
    }

    @media (max-width: 991px) {
        padding-top: 45px;
    }
`;

export const SectionTitle = styled(Title)`
    line-height: 1.65;
    margin-bottom: 65px;

    @media (max-width: 991px) {
        margin-bottom: 30px;
    }

    @media (max-width: 767px) {
        font-size: ${({ theme }) => theme.fontSizes.modal_title}px;
    }
`;

export const DotsBg = styled(IconManager)`
    position: absolute;
    right: 0;
    top: -25%;

    @media (max-width: 1199px) {
        font-size: 600px;
        top: -10%;
    }
`;

export const StepsWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1199px) {
        justify-content: center;
    }

    @media (max-width: 767px) {
        flex-direction: column;
    }
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

    @media (max-width: 1199px) {
        left: 52%;
    }

    @media (max-width: 991px) {
        height: 140px;
        width: 145px;
    }

    @media (max-width: 767px) {
        width: 140px;
    }
`;

export const StepWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;
    position: relative;

    @media (max-width: 1199px) {
        .icon-1 {
            font-size: 320px;
        }

        .icon-2 {
            font-size: 320px;
        }

        .icon-3 {
            font-size: 295px;
        }
    }

    @media (max-width: 991px) {
        .icon-1 {
            font-size: 250px;
        }

        .icon-2 {
            font-size: 250px;
        }

        .icon-3 {
            font-size: 225px;
        }
    }

    @media (max-width: 767px) {
        .icon-1 {
            font-size: 270px;
            height: 270px;

            svg {
                height: 260px;
            }
        }

        .icon-2 {
            font-size: 270px;
            height: 270px;

            svg {
                height: 260px;
            }
        }

        .icon-3 {
            height: 270px;
            font-size: 245px;

            svg {
                height: 260px;
                margin-left: -15px;
            }
        }
    }

    &:last-child {
        ${StepInner} {
            transform: translate(-50%, -50%);

            @media (max-width: 767px) {
                margin-left: -15px;
            }
        }
    }
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

    @media (max-width: 1199px) {
        margin-top: 10px;
    }

    @media (max-width: 991px) {
        font-size: ${({ theme }) => theme.fontSizes.button}px;
        margin-top: 10px;
    }
`;
