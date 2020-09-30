import React from 'react';
import { Container } from '@shared/styles/global.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
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
    return (
        <BenefitsWrapper>
            <DotsBg name="IconDotsRight" size={666} sizeY={1253} />
            <Container>
                <SectionTitle center>Korzyści z zastosowania AI</SectionTitle>
                <StepsWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits1"
                            size={362}
                            sizeY={337}
                        />
                        <StepInner>
                            <StepIcon>
                                <IconManager name="IconAutomation" size={52} />
                            </StepIcon>
                            <StepText>
                                Automatyzacja powtarzalnych procesów
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits2"
                            size={362}
                            sizeY={337}
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
                                Optymalizacja kosztów prowadzenia biznesu
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                    <StepWrapper>
                        <IconManager
                            name="IconBenefits3"
                            size={337}
                            sizeY={337}
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
                                Podejmowanie decyzji&nbsp;opartych
                                na&nbsp;danych
                            </StepText>
                        </StepInner>
                    </StepWrapper>
                </StepsWrapper>
            </Container>
        </BenefitsWrapper>
    );
};

export default Benefits;
