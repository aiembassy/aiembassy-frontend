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

    const filteredTrainingIds = maxItemsShow
        ? Object.keys(trainings[lang]).splice(maxItemsShow - 1)
        : Object.keys(trainings[lang]);

    console.log('Filtered trainings:', filteredTrainingIds);

    return (
        <WorkshopListWrapper withoutScroll={withoutScroll}>
            <ScrollWrapper as={withoutScroll ? 'div' : ScrollBar}>
                {filteredTrainingIds.map((trainingId, index) => {
                    const training = trainings[lang][trainingId];
                    const link = `/workshops/${trainingId}`;

                    return (
                        <TableRow key={`index_${index}`} landing={landing}>
                            <CellWrapper>
                                <WorkshopName>{training.title}</WorkshopName>
                            </CellWrapper>
                            <CellWrapper>
                                <DefaultText>
                                    {training.description}
                                </DefaultText>
                            </CellWrapper>
                            <CellWrapper>
                                <DefaultText>{training.category}</DefaultText>
                            </CellWrapper>
                            <CellWrapper>
                                <Link
                                    scroll={false}
                                    href="/workshops/[workshopId]"
                                    as={link}
                                >
                                    <ButtonWrapper
                                        onMouseOver={() => onHover(index)}
                                        onMouseOut={onOut}
                                    >
                                        {landing ? (
                                            <ArrowLink
                                                activeAnimation={
                                                    activeAnimation.hover ===
                                                    index
                                                }
                                                buttonType="TRANSPARENT"
                                                iconType="IconArrowRight"
                                                iconSize={20}
                                                iconActiveColor={[
                                                    'green_hover',
                                                ]}
                                                noPadding
                                            >
                                                {t('common:more')}
                                            </ArrowLink>
                                        ) : (
                                            <ButtonWrapper>
                                                <ButtonLink
                                                    buttonType="PRIMARY"
                                                    width={165}
                                                    className="button-link"
                                                >
                                                    {t('common:more')}
                                                </ButtonLink>
                                            </ButtonWrapper>
                                        )}
                                    </ButtonWrapper>
                                </Link>
                            </CellWrapper>
                        </TableRow>
                    );
                })}
            </ScrollWrapper>
            {maxItemsShow && (
                <Link href="/landing/list" as="/landing/lista-szkolen">
                    <LandingButtonWrapper>
                        <ButtonLink
                            buttonType="TERTIARY"
                            width={280}
                            className="button-link"
                        >
                            {t('common:come_back_to_workshops')}
                        </ButtonLink>
                    </LandingButtonWrapper>
                </Link>
            )}
        </WorkshopListWrapper>
    );
};

export default WorkshopList;
