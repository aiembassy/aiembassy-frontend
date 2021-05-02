import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/_layout/Layout.view';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import projects from '@shared/data/projects';
import useTranslation from 'next-translate/useTranslation';

const ProjectPage = ({ projectId }) => {
    const { t, lang } = useTranslation('common');

    const router = useRouter();
    const data = projects[lang][projectId];

    useEffect(() => {
        router.prefetch('/');
    }, []);

    return (
        <Layout
            meta={{
                title: `AI Embassy - ${data.title}`,
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal isBackLink modalType="project">
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default ProjectPage;

export function getStaticProps({ params: { projectId }, locale }) {
    return { props: { projectId, locale } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(projects)
            .map((lang) =>
                Object.keys(projects[lang]).map((projectId) => ({
                    params: { projectId: projectId.toString() },
                    locale: lang,
                })),
            )
            .flat(),
        fallback: false,
    };
}
