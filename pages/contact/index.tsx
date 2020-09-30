import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalContact from '@components/Modals/ModalContact/ModalContact';
import Layout from '@components/_layout/Layout.view';

const ContactPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Kontakt',
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal smallModal>
                <ModalContact smallModal />
            </Modal>
        </Layout>
    );
};

export default ContactPage;
