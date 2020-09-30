import React from 'react';
import Layout from '@components/_layout/Layout.view';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Layout
                meta={{
                    title: 'AI Embassy - Homepage',
                    description: 'AI Embassy',
                    keywords: 'AI, AI Embassy',
                }}
            />
        </motion.div>
    );
};

export default Home;
