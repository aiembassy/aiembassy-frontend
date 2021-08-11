import React from 'react';
import { Container } from '@shared/styles/global.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import useTranslation from 'next-translate/useTranslation';
import {
    SectionTitle,
    BenefitsWrapper,
    DotsBg,
    StepsWrapper,
    StepWrapper,
    StepIcon,
    StepInner,
    StepText,
} from './Benefits.styled';

const Benefits: React.FC = () => {
    const { t, lang } = useTranslation('common');

    return (
        <BenefitsWrapper>
            <DotsBg name="IconDotsRight" size={666} sizeY={1253} />
            <Container>
                <SectionTitle center>{t('benefits_title')}</SectionTitle>
                <StepsWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits1"
                            size={362}
                            sizeY={337}
                            className="icon-1"
                        />
                        <StepInner>
                            <StepIcon>
                                <IconManager name="IconAutomation" size={52} />
                            </StepIcon>
                            <StepText>
                                {t('benefits_automation_title')}
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits2"
                            size={362}
                            sizeY={337}
                            className="icon-2"
                        />
                        <StepInner>
                            <StepIcon>
                                <IconManager
                                    name="IconOptimization"
                                    size={57}
                                    sizeY={52}
                                />
                            </StepIcon>
                            <StepText>
                                {t('benefits_optimization_title')}
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits3"
                            size={337}
                            sizeY={337}
                            className="icon-3"
                        />
                        <StepInner>
                            <StepIcon>
                                <IconManager
                                    name="IconDecision"
                                    size={44}
                                    sizeY={44}
                                />
                            </StepIcon>
                            <StepText>
                                {t('benefits_data_driven_title')}
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                </StepsWrapper>
            </Container>
        </BenefitsWrapper>
    );
};

export default Benefits;
