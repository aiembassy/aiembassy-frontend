import React from 'react';
import Modal from '@components/_universal/Modal/Modal';
import ModalWorkshops from '@components/Modals/ModalWorkshops/ModalWorkshops';
import Layout from '@components/_layout/Layout.view';
import useTranslation from 'next-translate/useTranslation';

const WorkshopsPage = () => {
    const { t, lang } = useTranslation('workshops');

    return (
        <Layout
            meta={{
                title: t('page_title'),
                description: t('page_description'),
                keywords: t('page_keywords'),
            }}
        >
            <Modal>
                <ModalWorkshops />
            </Modal>
        </Layout>
    );
};

export default WorkshopsPage;
