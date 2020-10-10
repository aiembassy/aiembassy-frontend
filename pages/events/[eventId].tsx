import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/_layout/Layout.view';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import events from '@shared/data/events';
import siteConfig from '@shared/data/siteConfig';

const EventPage = ({ eventId }) => {
    const router = useRouter();
    const data = events[eventId];

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
            <Modal isBackLink modalType="event">
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default EventPage;

export function getStaticProps({ params: { eventId } }) {
    return { props: { eventId } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(events).map((eventId) => ({
            params: { eventId: eventId.toString() },
        })),
        fallback: false,
    };
}
