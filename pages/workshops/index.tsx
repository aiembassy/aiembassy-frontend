import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalWorkshops from '@components/Modals/ModalWorkshops/ModalWorkshops';
import Layout from '@components/_layout/Layout.view';

const WorkshopsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Szkolenia',
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal>
                <ModalWorkshops />
            </Modal>
        </Layout>
    );
};

export default WorkshopsPage;
