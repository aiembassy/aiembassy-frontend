import * as React from 'react';
import { useState } from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { filtersHeader } from '@shared/data/projectsFilter';
import useTranslation from 'next-translate/useTranslation';
import Filter from './Filter/Filter';
import FilterList from './FilterList/FilterList';

const ModalProjects = () => {
    const { t, lang } = useTranslation('projects');

    // Local state for managing filtering logic
    const [filters, updateFilters] = useState(filtersHeader);

    // Filter change handler
    const onFilter = (event) => {
        const {
            target: { value, checked },
        } = event;

        updateFilters((state) =>
            state.map((filter) => {
                if (filter.label === value) {
                    return {
                        ...filter,
                        isChecked: checked,
                    };
                }

                return filter;
            }),
        );
    };
    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('common:projects_title')}</ModalTitle>
                <ModalDescription>{t('projects_description')}</ModalDescription>
            </ModalInfo>
            <ModalContent>
                <Filter filters={filters} onFilter={(e) => onFilter(e)} />
                <FilterList filters={filters} />
            </ModalContent>
        </>
    );
};

export default ModalProjects;
