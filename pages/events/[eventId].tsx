import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/_layout/Layout.view';
import Modal from '@components/_universal/Modal/Modal';
import ModalArticle from '@components/Modals/ModalArticle/ModalArticle';
import events from '@shared/data/events';
import useTranslation from 'next-translate/useTranslation';

const EventPage = ({ eventId }) => {
    const { t, lang } = useTranslation('common');

    const router = useRouter();
    const data = events[lang][eventId];

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
            <Modal isBackLink modalType="event">
                <ModalArticle data={data} />
            </Modal>
        </Layout>
    );
};

export default EventPage;

export function getStaticProps({ params: { eventId }, locale }) {
    return { props: { eventId, locale } };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(events)
            .map((lang) =>
                Object.keys(events[lang]).map((eventId) => ({
                    params: { eventId: eventId.toString() },
                    locale: lang,
                })),
            )
            .flat(),
        fallback: false,
    };
}
