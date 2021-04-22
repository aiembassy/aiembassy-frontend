import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalContact from '@components/Modals/ModalContact/ModalContact';
import Layout from '@components/_layout/Layout.view';
import useTranslation from 'next-translate/useTranslation';

const ContactPage = () => {
    const { t, lang } = useTranslation('contact');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal smallModal>
                <ModalContact smallModal />
            </Modal>
        </Layout>
    );
};

export default ContactPage;
