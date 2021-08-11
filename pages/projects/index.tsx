import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalProjects from '@components/Modals/ModalProjects/ModalProjects';
import Layout from '@components/_layout/Layout.view';
import useTranslation from 'next-translate/useTranslation';

const ProjectsPage = () => {
    const { t, lang } = useTranslation('projects');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal>
                <ModalProjects />
            </Modal>
        </Layout>
    );
};

export default ProjectsPage;
