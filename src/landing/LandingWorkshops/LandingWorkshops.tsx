import React from 'react';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import { Container } from '@shared/styles/global.styled';
import {
    LandingWorkshopsWrapper,
    SectionDescription,
    SectionTitle,
} from './LandingWorkshops.styled';

interface IProps {
    landing?: boolean;
    maxItemsShow?: number;
}

const LandingWorkshops: React.FC<IProps> = ({ landing, maxItemsShow }) => {
    return (
        <LandingWorkshopsWrapper>
            <Container>
                <SectionTitle>Lista ostatnich szkoleń</SectionTitle>
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
        </LandingWorkshopsWrapper>
    );
};

export default LandingWorkshops;
