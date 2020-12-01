import styled from 'styled-components';
import { DefaultText } from '@shared/styles/typography.styled';
import IconManager from '@components/_universal/IconManager/IconManager';

export const TableHead = styled.div`
    display: flex;
`;

export const CellTitleWrapper = styled.div`
    flex: 1;
    margin-right: 30px;
    &:nth-child(2) {
        flex: unset;
        width: 265px;
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const TitleName = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 2;
`;
export const IconDotsTop = styled(IconManager)`
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
`;
