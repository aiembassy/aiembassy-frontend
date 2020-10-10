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
    const itemsList = new Array(1).fill(1);

    return (
        <TableContent>
            <ScrollBar>
                {itemsList.map((item, index) => (
                    <TableRow key={`index_${index}`}>
                        <CellWrapper>
                            <WorkshopName>
                                Wstęp do sztucznej inteligencji
                            </WorkshopName>
                        </CellWrapper>
                        <CellWrapper>
                            <DefaultText>
                                Sztuczna inteligencja zrewolucjonizuje świat,
                                który znamy. Wierzymy, że każdy z nas powinien
                                znać jej podstawy i możliwe zagrożenia.
                            </DefaultText>
                        </CellWrapper>
                        <CellWrapper>
                            <DefaultText>Podstawy AI</DefaultText>
                        </CellWrapper>
                        <CellWrapper>
                            <Link
                                scroll={false}
                                href="/workshops/[workshopId]"
                                as="/workshops/wstep-do-ai"
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
