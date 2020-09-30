import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalEvents from '@components/Modals/ModalEvents/ModalEvents';
import Layout from '@components/_layout/Layout.view';

const EventsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Wydarzenia i konferencje',
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal>
                <ModalEvents />
            </Modal>
        </Layout>
    );
};

export default EventsPage;
