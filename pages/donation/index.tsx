import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalDonation from '@components/Modals/ModalDonation/ModalDonation';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';

const DonationPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Wspomóż nas',
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal smallModal>
                <ModalDonation smallModal />
            </Modal>
        </Layout>
    );
};

export default DonationPage;
