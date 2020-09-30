import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalProjects from '@components/Modals/ModalProjects/ModalProjects';
import Layout from '@components/_layout/Layout.view';

const ProjectsPage = () => {
    return (
        <Layout
            meta={{
                title: 'AI Embassy - Projekty',
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal>
                <ModalProjects />
            </Modal>
        </Layout>
    );
};

export default ProjectsPage;
