import React from 'react';
import useTrainings from '@utils/useTrainings';
import {
    LandingTrainingInner,
    LandingTrainingWrapper,
    TrainingCategory,
    TrainingImage,
    TrainingImageWrapper,
    TrainingText,
    TrainingTitle,
} from './LandingTraining.styled';

const LandingTraining: React.FC = () => {
    const { training } = useTrainings();

    return (
        <LandingTrainingWrapper>
            <LandingTrainingInner>
                <TrainingCategory>{training?.category}</TrainingCategory>
                <TrainingTitle>{training?.title}</TrainingTitle>
                <TrainingImageWrapper>
                    <TrainingImage src={training?.image} alt="training image" />
                </TrainingImageWrapper>
                <TrainingText>{training?.description}</TrainingText>
            </LandingTrainingInner>
        </LandingTrainingWrapper>
    );
};

export default LandingTraining;
