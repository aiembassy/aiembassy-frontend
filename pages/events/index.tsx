import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalEvents from '@components/Modals/ModalEvents/ModalEvents';
import Layout from '@components/_layout/Layout.view';
import useTranslation from 'next-translate/useTranslation';

const EventsPage = () => {
    const { t, lang } = useTranslation('events');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal>
                <ModalEvents />
            </Modal>
        </Layout>
    );
};

export default EventsPage;
