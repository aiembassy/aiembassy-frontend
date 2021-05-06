import * as React from 'react';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';

const ModalWorskshops = () => {
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
                <WorkshopTable />
            </ModalContent>
        </>
    );
};

export default ModalWorskshops;
