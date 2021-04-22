import * as React from 'react';
import {
    ModalTitle,
    ModalDescription,
    ModalInfo,
    ModalContent,
} from '@components/_universal/Modal/Modal.styled';
import useTranslation from 'next-translate/useTranslation';
import {
    TableWrapper,
    CellTitleWrapper,
    TitleName,
    TableHead,
} from './ModalWorkshops.styled';
import WorkshopList from './WorkshopList/WorkshopList';

const ModalWorkshops = () => {
    const { t, lang } = useTranslation('workshops');

    return (
        <>
            <ModalInfo>
                <ModalTitle>{t('workshops_title')}</ModalTitle>
                <ModalDescription>
                    {t('workshops_description')}
                </ModalDescription>
            </ModalInfo>
            <ModalContent>
                <TableWrapper>
                    <TableHead>
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
                    <WorkshopList />
                </TableWrapper>
            </ModalContent>
        </>
    );
};

export default ModalWorkshops;
