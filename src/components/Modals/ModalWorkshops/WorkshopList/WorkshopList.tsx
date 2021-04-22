import * as React from 'react';
import { DefaultText } from '@shared/styles/typography.styled';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import { ButtonElement } from '@components/_universal/ButtonLink/ButtonLink.styled';
import workshops from '@shared/data/workshops';
import useTranslation from 'next-translate/useTranslation';
import {
    TableContent,
    WorkshopName,
    CellWrapper,
    TableRow,
    ButtonWrapper,
} from './WorkshopList.styled';

const WorkshopList = () => {
    const { t, lang } = useTranslation('workshops');

    return (
        <TableContent>
            <ScrollBar>
                {Object.keys(workshops).map((workshopId) => {
                    const workshop = workshops[workshopId];
                    const workshopLinkLocation = `/workshops/${workshopId}`;

                    return (
                        <TableRow key={`index_${workshopId}`}>
                            <CellWrapper>
                                <WorkshopName>{workshop.title}</WorkshopName>
                            </CellWrapper>
                            <CellWrapper>
                                <DefaultText>
                                    {workshop.shortDescription}
                                </DefaultText>
                            </CellWrapper>
                            <CellWrapper>
                                <DefaultText>{workshop.category}</DefaultText>
                            </CellWrapper>
                            <CellWrapper>
                                <Link
                                    scroll={false}
                                    href="/workshops/[workshopId]"
                                    as={workshopLinkLocation}
                                >
                                    <ButtonWrapper>
                                        <ButtonLink
                                            buttonType="PRIMARY"
                                            width={165}
                                            className="button-link"
                                        >
                                            {t('common:more')}
                                        </ButtonLink>
                                    </ButtonWrapper>
                                </Link>
                            </CellWrapper>
                        </TableRow>
                    );
                })}
            </ScrollBar>
        </TableContent>
    );
};

export default WorkshopList;
