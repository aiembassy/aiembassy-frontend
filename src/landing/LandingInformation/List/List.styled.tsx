import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const ListTitle = styled(DefaultText)`
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 28px;
`;

export const ListWrapper = styled.div`
    padding: 0;

    & + & {
        margin-top: 52px;

        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
`;

export const ListItem = styled.div`
    align-items: flex-start;
    display: flex;
    margin-bottom: 8px;
`;

export const ListItemIcon = styled(IconManager)``;

export const ListItemText = styled(DefaultText)`
    margin: 4px 0 0 20px;
    max-width: 600px;
`;
