import React from 'react';
import Layout from '@components/_layout/Layout.view';
import { motion } from 'framer-motion';
import siteConfig from '@shared/data/siteConfig';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Layout
                meta={{
                    title: 'AI Embassy - Supporting AI Revolution',
                    description: siteConfig.metaDescription,
                    keywords: siteConfig.metaKeywords,
                }}
            />
        </motion.div>
    );
};


export default Home;
