import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/_layout/Layout.view';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import workshops from '@shared/data/workshops';
import useTranslation from 'next-translate/useTranslation';

const WorkshopPage = ({ workshopId }) => {
    const { t, lang } = useTranslation('common');

    const router = useRouter();
    const data = workshops[workshopId];

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
            <Modal isBackLink modalType="workshop">
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default WorkshopPage;

export function getStaticProps({ params: { workshopId } }) {
    return { props: { workshopId } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(workshops).map((workshopId) => ({
            params: { workshopId: workshopId.toString() },
        })),
        fallback: false,
    };
}
