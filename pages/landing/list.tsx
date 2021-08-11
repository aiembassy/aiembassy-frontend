import React from 'react';
import Layout from '@components/_layout/Layout.view';
import WorkshopTable from '@components/WorkshopTable/WorkshopTable';
import useTranslation from 'next-translate/useTranslation';
// import { useRouter } from 'next/router';

const TrainingListPage = () => {
    // TODO: add workshop list data
    // const router = useRouter();
    // const data = trainings[landingId];

    const { t, lang } = useTranslation('landing');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
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
