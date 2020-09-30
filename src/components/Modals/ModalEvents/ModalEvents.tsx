import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import EventsList from './EventsList/EventsList';

interface IProps {
    smallModal?: boolean;
}

const ModalEvents: React.FC<IProps> = ({ smallModal }) => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>Wydarzenia i konferencje</ModalTitle>
                <ModalDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                    facilisis sed cursus egestas scelerisque ut tellus vitae.
                    Morbi consequat ullamcorper sit vulputate donec.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <EventsList />
            </ModalContent>
        </>
    );
};

export default ModalEvents;
