import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalWorkshops from '@components/Modals/ModalWorkshops/ModalWorkshops';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';

const WorkshopsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Szkolenia',
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal>
                <ModalWorkshops />
            </Modal>
        </Layout>
    );
};

export default WorkshopsPage;
