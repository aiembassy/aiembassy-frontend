import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalContact from '@components/Modals/ModalContact/ModalContact';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';

const ContactPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Kontakt',
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal smallModal>
                <ModalContact smallModal />
            </Modal>
        </Layout>
    );
};

export default ContactPage;
