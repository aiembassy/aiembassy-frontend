import React from 'react';
import Layout from '@components/_layout/Layout.view';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import siteConfig from '@shared/data/siteConfig';
// import { useRouter } from 'next/router';

const TrainingListPage = () => {
    // TODO: add workshop list data
    // const router = useRouter();
    // const data = trainings[landingId];

    return (
        <Layout
            meta={{
                title: `AI Embassy - lista szkoleń`,
                description: siteConfig.metaDescription,
                keywords: siteConfig.metaKeywords,
            }}
        />
    );
};

export default TrainingListPage;

export function getStaticProps() {
    return {
        props: { layout: 'list' },
    };
}
