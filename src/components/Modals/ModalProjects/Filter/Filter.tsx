import * as React from 'react';
import {
    FilterWrapper,
    FilterInput,
    FilterLabel,
    FilterItem,
} from './Filter.styled';

interface IProps {
    filters: { isChecked: boolean; label: string; name: string }[];
    onFilter: (e) => void;
}

const Filter: React.FC<IProps> = ({ filters, onFilter }) => {
    return (
        <FilterWrapper>
            {filters.map((filter) => (
                <FilterItem key={`${filter.label}_key`}>
                    <FilterInput
                        id={filter.label}
                        type="checkbox"
                        value={filter.label}
                        onChange={onFilter}
                        checked={filter.isChecked}
                    />
                    <FilterLabel htmlFor={filter.label}>
                        {filter.name}
                        <span>{filter.name}</span>
                    </FilterLabel>
                </FilterItem>
            ))}
        </FilterWrapper>
    );
};

export default Filter;
