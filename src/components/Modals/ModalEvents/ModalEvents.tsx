import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import EventsList from './EventsList/EventsList';
import { IconDotsTop } from './ModalEvents.styled';

interface IProps {
    smallModal?: boolean;
}

const ModalEvents: React.FC<IProps> = ({ smallModal }) => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>Wydarzenia i konferencje</ModalTitle>
                <ModalDescription>
                    Na tych wydarzeniach można było bądź będzie można spotkać
                    kogoś z nas.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <IconDotsTop name="IconDotsTop" size={1000} sizeY={530} />
                <EventsList />
            </ModalContent>
        </>
    );
};

export default ModalEvents;
