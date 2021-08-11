import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import useTranslation from 'next-translate/useTranslation';
import EventsList from './EventsList/EventsList';
import { IconDotsTop } from './ModalEvents.styled';

interface IProps {
    smallModal?: boolean;
}

const ModalEvents: React.FC<IProps> = ({ smallModal }) => {
    const { t, lang } = useTranslation('events');

    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('common:events_title')}</ModalTitle>
                <ModalDescription>{t('events_description')}</ModalDescription>
            </ModalInfo>
            <ModalContent>
                <IconDotsTop name="IconDotsTop" size={1000} sizeY={530} />
                <EventsList />
            </ModalContent>
        </>
    );
};

export default ModalEvents;
