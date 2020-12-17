import styled from 'styled-components';

export const FilterWrapper = styled.div`
    display: flex;
`;

export const FilterInput = styled.input`
    display: none;
`;

export const FilterLabel = styled.label`
    align-items: center;
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    color: transparent;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
    height: 38px;
    line-height: 1.7;
    padding: 0 28px;
    position: relative;

    span {
        color: ${({ theme }) => theme.colors.text};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        position: absolute;
    }
`;

export const FilterItem = styled('button')`
    background-color: transparent;
    border: 0;
    display: flex;
    height: 38px;
    padding: 0;
    position: relative;
    margin-right: 8px;
    outline: none;

    &:last-child {
        margin-right: 0;
    }

    > ${FilterInput} {
        width: 0;
        height: 0;

        &:checked {
            & + ${FilterLabel} {
                background: ${({ theme }) => theme.colors.yellow};
                span {
                    font-weight: ${({ theme }) => theme.fontWeight.semi_bold};
                }
            }
        }
    }

    > ${FilterLabel} {
        &:hover {
            cursor: pointer;
        }
    }
`;
