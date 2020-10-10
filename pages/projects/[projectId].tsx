import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/_layout/Layout.view';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import projects from '@shared/data/projects';
import siteConfig from '@shared/data/siteConfig';

const ProjectPage = ({ projectId }) => {
    const router = useRouter();
    const data = projects[projectId];

    useEffect(() => {
        router.prefetch('/');
    }, []);

    return (
        <Layout
            meta={{
                title: `AI Embassy - ${data.title}`,
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        >
            <Modal isBackLink modalType="project">
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default ProjectPage;

export function getStaticProps({ params: { projectId } }) {
    return { props: { projectId } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(projects).map((projectId) => ({
            params: { projectId: projectId.toString() },
        })),
        fallback: false,
    };
}
