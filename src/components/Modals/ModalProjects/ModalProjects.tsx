import * as React from 'react';
import { useState } from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import { filtersHeader } from '@shared/data/projectsFilter';
import Filter from './Filter/Filter';
import FilterList from './FilterList/FilterList';

const ModalProjects = () => {
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
                <ModalTitle>Nasze projekty</ModalTitle>
                <ModalDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                    facilisis sed cursus egestas scelerisque ut tellus vitae.
                    Morbi consequat ullamcorper sit vulputate donec.
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <Filter filters={filters} onFilter={(e) => onFilter(e)} />
                <FilterList filters={filters} />
            </ModalContent>
        </>
    );
};

export default ModalProjects;
