import * as React from 'react';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import useTranslation from 'next-translate/useTranslation';

const ModalWorkshops = () => {
    const { t, lang } = useTranslation('workshops');

    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('workshops_title')}</ModalTitle>
                <ModalDescription>
                    {t('workshops_description')}
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <WorkshopTable />
            </ModalContent>
        </>
    );
};

export default ModalWorkshops;
