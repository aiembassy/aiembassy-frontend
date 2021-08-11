import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalDonation from '@components/Modals/ModalDonation/ModalDonation';
import Layout from '@components/_layout/Layout.view';
import useTranslation from 'next-translate/useTranslation';

const DonationPage = () => {
    const { t, lang } = useTranslation('donation');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal smallModal>
                <ModalDonation smallModal />
            </Modal>
        </Layout>
    );
};

export default DonationPage;
