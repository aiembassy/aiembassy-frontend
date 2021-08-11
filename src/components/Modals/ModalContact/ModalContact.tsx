import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { LinkText } from '@shared/styles/typography.styled';
import FormComponent from '@components/_forms/FormComponent';
import useTranslation from 'next-translate/useTranslation';

interface IProps {
    smallModal: boolean;
}

const ModalContact: React.FC<IProps> = ({ smallModal }) => {
    const { t, lang } = useTranslation('contact');

    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('contact_title')}</ModalTitle>
                <ModalDescription smallModal={smallModal}>
                    {t('contact_description')}
                    <br />
                    {t('contact_write_to_us')}{' '}
                    <LinkText href="mailto:contact@embassy.ai">
                        contact@embassy.ai
                    </LinkText>{' '}
                    {t('contact_fill_up_form')}
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <FormComponent />
            </ModalContent>
        </>
    );
};

export default ModalContact;
