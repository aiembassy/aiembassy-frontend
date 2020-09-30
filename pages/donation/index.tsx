import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalDonation from '@components/Modals/ModalDonation/ModalDonation';
import Layout from '@components/_layout/Layout.view';

const DonationPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Wspomóż nas',
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal smallModal>
                <ModalDonation smallModal />
            </Modal>
        </Layout>
    );
};

export default DonationPage;
