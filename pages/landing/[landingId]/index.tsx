import React, { useEffect } from 'react';
import Layout from '@components/_layout/Layout.view';
import { trainings } from '@shared/data/trainings';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const LandingPage = ({ landingId }) => {
    const { t, lang } = useTranslation('landing');

    const router = useRouter();
    const data = trainings[landingId];

    useEffect(() => {
        router.prefetch('/');
    }, []);

    return (
        <Layout
            meta={{
                title: `AI Embassy - ${data?.title}`,
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        />
    );
};

export default LandingPage;

export function getStaticProps({ params }) {
    return {
        props: { layout: 'landing', landingId: params.landingId ?? null },
    };
}

export function getStaticPaths() {
    return {
        paths: Object.keys(trainings).map((landingId) => ({
            params: { landingId: landingId.toString() },
        })),
        fallback: false,
    };
}
