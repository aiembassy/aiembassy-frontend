import React from 'react';
import useTrainings from '@utils/useTrainings';
import Summary from './Summary/Summary';
import TrainerCard from './TrainerCard/TrainerCard';
import List from './List/List';
import {
    LandingInformationContent,
    LandingInformationInner,
    LandingInformationWrapper,
    ListsWrapper,
} from './LandingInformation.styled';

const LandingInformation: React.FC = () => {
    const { training } = useTrainings();

    return (
        <LandingInformationWrapper>
            <LandingInformationInner>
                <LandingInformationContent>
                    <ListsWrapper>
                        {training?.sections.map((item, index) => (
                            <List
                                key={index}
                                title={item.title}
                                list={item.bulletPoints}
                            />
                        ))}
                    </ListsWrapper>
                    <TrainerCard
                        photo={training?.trainer.photo}
                        name={training?.trainer.name}
                        position={training?.trainer.position}
                        bio={training?.trainer.bio}
                        socialLinks={training?.trainer.socialLinks}
                    />
                </LandingInformationContent>
                <Summary text={training?.summary} />
            </LandingInformationInner>
        </LandingInformationWrapper>
    );
};

export default LandingInformation;
