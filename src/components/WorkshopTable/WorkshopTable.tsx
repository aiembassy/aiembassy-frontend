import React from 'react';
import {
    CellTitleWrapper,
    TableHead,
    TitleName,
    WorkshopTableWrapper,
} from '@components/WorkshopTable/WorkshopTable.styled';
import WorkshopList from './WorkshopList/WorkshopList';

interface IProps {
    landing?: boolean;
    maxItemsShow?: number;
    withoutScroll?: boolean;
}

const WorkshopTable: React.FC<IProps> = ({
    landing,
    maxItemsShow,
    withoutScroll,
}) => {
    return (
        <WorkshopTableWrapper>
            <TableHead landing={landing}>
                <CellTitleWrapper>
                    <TitleName>Nazwa szkolenia</TitleName>
                </CellTitleWrapper>
                <CellTitleWrapper>
                    <TitleName>Opis</TitleName>
                </CellTitleWrapper>
                <CellTitleWrapper>
                    <TitleName>Kategoria</TitleName>
                </CellTitleWrapper>
                <CellTitleWrapper />
            </TableHead>
            <WorkshopList
                landing={landing}
                maxItemsShow={maxItemsShow}
                withoutScroll={withoutScroll}
            />
        </WorkshopTableWrapper>
    );
};

export default WorkshopTable;
