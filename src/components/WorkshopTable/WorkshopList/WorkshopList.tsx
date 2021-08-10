import * as React from 'react';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import ScrollBar from 'react-perfect-scrollbar';
import { DefaultText } from '@shared/styles/typography.styled';
import { trainings } from '@shared/data/trainings';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
    ArrowLink,
    ButtonWrapper,
    CellWrapper,
    LandingButtonWrapper,
    ScrollWrapper,
    TableRow,
    WorkshopListWrapper,
    WorkshopName,
} from './WorkshopList.styled';

interface IProps {
    landing?: boolean;
    maxItemsShow?: number;
    withoutScroll?: boolean;
}

const WorkshopList: React.FC<IProps> = ({
    landing,
    maxItemsShow,
    withoutScroll,
}) => {
    const { t, lang } = useTranslation('workshops');

    const [activeAnimation, setActiveAnimation] = useState({ hover: null });
    const onHover = (id) => {
        setActiveAnimation({ hover: id });
    };
    const onOut = () => {
        setActiveAnimation({ hover: null });
    };

    const itemList = maxItemsShow
        ? Object.keys(trainings).filter((item, index) => index < maxItemsShow)
        : Object.keys(trainings);

    return (
        <WorkshopListWrapper withoutScroll={withoutScroll}>
            <ScrollWrapper as={withoutScroll ? 'div' : ScrollBar}>
                {itemList.map((item, index) => (
                    <TableRow key={`index_${index}`} landing={landing}>
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
                                <ButtonWrapper
                                    onMouseOver={() => onHover(index)}
                                    onMouseOut={onOut}
                                >
                                    {landing ? (
                                        <ArrowLink
                                            activeAnimation={
                                                activeAnimation.hover === index
                                            }
                                            buttonType="TRANSPARENT"
                                            iconType="IconArrowRight"
                                            iconSize={20}
                                            iconActiveColor={['green_hover']}
                                            noPadding
                                        >
                                            więcej
                                        </ArrowLink>
                                    ) : (
                                        <ButtonWrapper>
                                            <ButtonLink
                                                buttonType="PRIMARY"
                                                width={165}
                                                className="button-link"
                                            >
                                                Więcej
                                            </ButtonLink>
                                        </ButtonWrapper>
                                    )}
                                </ButtonWrapper>
                            </Link>
                        </CellWrapper>
                    </TableRow>
                ))}
            </ScrollWrapper>
            {maxItemsShow && (
                <Link href="/landing/list" as="/landing/lista-szkolen">
                    <LandingButtonWrapper>
                        <ButtonLink
                            buttonType="TERTIARY"
                            width={280}
                            className="button-link"
                        >
                            Zobacz wszystkie
                        </ButtonLink>
                    </LandingButtonWrapper>
                </Link>
            )}
        </WorkshopListWrapper>
    );
};

export default WorkshopList;
