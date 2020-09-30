import * as React from 'react';
import { DefaultText } from '@shared/styles/typography.styled';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import {
    TableContent,
    WorkshopName,
    CellWrapper,
    TableRow,
    ButtonWrapper,
} from './WorkshopList.styled';

const WorkshopList = () => {
    const itemsList = new Array(15).fill(1);

    return (
        <TableContent>
            <ScrollBar>
                {itemsList.map((item, index) => (
                    <TableRow key={`index_${index}`}>
                        <CellWrapper>
                            <WorkshopName>AI dla programistów</WorkshopName>
                        </CellWrapper>
                        <CellWrapper>
                            <DefaultText>
                                Implementacja rozwiązań sztucznej inteligencji w
                                systemach opartych o modelowanie danych
                            </DefaultText>
                        </CellWrapper>
                        <CellWrapper>
                            <DefaultText>Nazwa kategorii</DefaultText>
                        </CellWrapper>
                        <CellWrapper>
                            <Link
                                scroll={false}
                                href="/workshops/[workshopId]"
                                as="/workshops/szkolenie-2"
                            >
                                <ButtonWrapper>
                                    <ButtonLink
                                        buttonType="PRIMARY"
                                        width={165}
                                    >
                                        Więcej
                                    </ButtonLink>
                                </ButtonWrapper>
                            </Link>
                        </CellWrapper>
                    </TableRow>
                ))}
            </ScrollBar>
        </TableContent>
    );
};

export default WorkshopList;
