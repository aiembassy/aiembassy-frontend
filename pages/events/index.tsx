import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalEvents from '@components/Modals/ModalEvents/ModalEvents';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';

const EventsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Wydarzenia i konferencje',
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal>
                <ModalEvents />
            </Modal>
        </Layout>
    );
};

export default EventsPage;
