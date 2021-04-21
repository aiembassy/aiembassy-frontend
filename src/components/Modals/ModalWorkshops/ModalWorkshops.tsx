import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import {
    TableWrapper,
    CellTitleWrapper,
    TitleName,
    TableHead,
} from './ModalWorkshops.styled';
import WorkshopList from './WorkshopList/WorkshopList';

const ModalWorkshops = () => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>Darmowe warsztaty i&nbsp;szkolenia</ModalTitle>
                <ModalDescription>
                    Fundacja pomoże Ci rozwijać Twoje kompetencje w dziedzinie
                    sztucznej inteligencji poprzez prowadzenie darmowych szkoleń
                    i warsztatów, również w formule on-line.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <TableWrapper>
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
                </TableWrapper>
            </ModalContent>
        </>
    );
};

export default ModalWorkshops;
