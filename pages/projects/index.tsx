import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalProjects from '@components/Modals/ModalProjects/ModalProjects';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';

const ProjectsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Projekty',
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal>
                <ModalProjects />
            </Modal>
        </Layout>
    );
};

export default ProjectsPage;
