import React from 'react';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import { Container } from '@shared/styles/global.styled';
import {
    SectionDescription,
    SectionTitle,
} from '@landing/LandingWorkshops/LandingWorkshops.styled';
import { LandingWorkshopsContainerWrapper } from './LandingWorkshopsContainer.styled';

interface IProps {
    landing?: boolean;
    maxItemsShow?: number;
}

const LandingWorkshopsContainer: React.FC<IProps> = ({
    landing,
    maxItemsShow,
}) => {
    return (
        <LandingWorkshopsContainerWrapper>
            <Container>
                <SectionTitle>Lista wszystkich szkoleń</SectionTitle>
                <SectionDescription>
                    Sztuczna inteligencja będzie w najbliższych latach motorem
                    napędowym trwającej rewolucji naukowej. Fundacja AI Embassy
                    dąży do tego, aby to Polska stała się centrum tych
                    innowacji. Poznaj nasze szkolenia.
                </SectionDescription>
                <WorkshopTable
                    landing={landing}
                    maxItemsShow={maxItemsShow}
                    withoutScroll
                />
            </Container>
        </LandingWorkshopsContainerWrapper>
    );
};

export default LandingWorkshopsContainer;
