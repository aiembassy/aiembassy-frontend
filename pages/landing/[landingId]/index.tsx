import React, { useEffect } from 'react';
import Layout from '@components/_layout/Layout.view';
import siteConfig from '@shared/data/siteConfig';
import { trainings } from '@shared/data/trainings';
import { useRouter } from 'next/router';

const LandingPage = ({ landingId }) => {
    const router = useRouter();
    const data = trainings[landingId];

    useEffect(() => {
        router.prefetch('/');
    }, []);

    return (
        <Layout
            meta={{
                title: `AI Embassy - ${data?.title}`,
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
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
