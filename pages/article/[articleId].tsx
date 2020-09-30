import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import projects from '@shared/data/projects';
import Layout from '@components/_layout/Layout.view';

const ArticlePage = ({ articleId }) => {
    const router = useRouter();
    const data = projects[articleId];

    useEffect(() => {
        router.prefetch('/');
    }, []);

    return (
        <Layout
            meta={{
                title: `AI Embassy - ${data.title}`,
                description: 'AI Embassy',
                keywords: 'AI, AI Embassy',
            }}
        >
            <Modal isBackLink>
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default ArticlePage;

export function getStaticProps({ params: { articleId } }) {
    return { props: { articleId } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(projects).map((articleId) => ({
            params: { articleId: articleId.toString() },
        })),
        fallback: false,
    };
}
