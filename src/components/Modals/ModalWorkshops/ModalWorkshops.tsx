import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import {
    CellTitleWrapper,
    TitleName,
    TableHead,
} from './ModalWorkshops.styled';
import WorkshopList from './WorkshopList/WorkshopList';

const ModalWorskshops = () => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>Darmowe warsztaty i szkolenia</ModalTitle>
                <ModalDescription>
                    Fundacja pomoże Ci rozwijać Twoje kompetencje w dziedzinie
                    sztucznej inteligencji poprzez prowadzenie darmowych szkoleń
                    i warsztatów, również w formule on-line.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <TableHead>
                    <CellTitleWrapper>
                        <TitleName>Nazwa szkolenia</TitleName>
                    </CellTitleWrapper>
                    <CellTitleWrapper>
                        <TitleName>Opis</TitleName>
                    </CellTitleWrapper>
                    <CellTitleWrapper>
                        <TitleName>Kategoria</TitleName>
                    </CellTitleWrapper>
                    <CellTitleWrapper />
                </TableHead>
                <WorkshopList />
            </ModalContent>
        </>
    );
};

export default ModalWorskshops;
