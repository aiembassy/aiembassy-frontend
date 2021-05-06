import React from 'react';
import {
    CellTitleWrapper,
    TableHead,
    TitleName,
    WorkshopTableWrapper,
} from '@components/WorkshopTable/WorkshopTable.styled';
import useTranslation from 'next-translate/useTranslation';
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
    const { t, lang } = useTranslation('workshops');

    return (
        <WorkshopTableWrapper>
            <TableHead landing={landing}>
                <CellTitleWrapper>
                    <TitleName>{t('workshop_name')}</TitleName>
                </CellTitleWrapper>
                <CellTitleWrapper>
                    <TitleName>{t('workshop_description')}</TitleName>
                </CellTitleWrapper>
                <CellTitleWrapper>
                    <TitleName>{t('workshop_category')}</TitleName>
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
