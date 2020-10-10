import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { LinkText } from '@shared/styles/typography.styled';
import FormComponent from '@components/_forms/FormComponent';

interface IProps {
    smallModal: boolean;
}

const ModalContact: React.FC<IProps> = ({ smallModal }) => {
    return (
        <>
            <ModalInfo>
                <ModalTitle>Porozmawiajmy</ModalTitle>
                <ModalDescription smallModal={smallModal}>
                    Chciałbyś zbudować społeczność AI w Twojej okolicy? Chcesz
                    dowiedzieć sie więcej o darmowych usługach doradczych lub o
                    ofercie komercyjnej AI Embassy? Pasjonują Cię rozwiązania
                    oparte o sztuczną inteligencję? <br />
                    Napisz do nas{' '}
                    <LinkText href="mailto:contact@embassy.ai">
                        contact@embassy.ai
                    </LinkText>{' '}
                    lub wypełnij formularz kontaktowy.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>{/* <FormComponent /> */}</ModalContent>
        </>
    );
};

export default ModalContact;
