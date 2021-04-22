import React from 'react';
import Layout from '@components/_layout/Layout.view';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
    const { t, lang } = useTranslation('common');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Layout
                meta={{
                    title: t('page_title'),
                    description: t('page_description'),
                    keywords: t('page_keywords'),
                }}
            />
        </motion.div>
    );
};

export default Home;
