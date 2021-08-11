import * as React from 'react';
import IsoTopeGrid from 'react-isotope';
import { filtersList } from '@shared/data/projectsFilter';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import { useState } from 'react';
import { ItemLink, ProjectItem } from '@components/Projects/Projects.styled';
import { Event } from '@components/Modals/ModalEvents/EventsList/EventsList.styled';
import useTranslation from 'next-translate/useTranslation';
import {
    FilterListWrapper,
    Card,
    CardItem,
    CardInner,
    CardContent,
    CardImage,
    Image,
    CardInfo,
    CardService,
    CardInfoInner,
    CardDate,
    CardLinkWrapper,
    CardLink,
    CardText,
    CardTitle,
} from './FilterList.styled';

interface IProps {
    filters: { isChecked: boolean; label: string; name: string }[];
}

type CardType = {
    category: string[];
    date: string;
    filter: string[];
    id: string;
    imageLink: string;
    link: string;
    text: string;
    title: string;
};

const FilterList: React.FC<IProps> = ({ filters }) => {
    const { t, lang } = useTranslation('projects');

    const [activeAnimation, setActiveAnimation] = useState({ hover: null });
    const onHover = (id) => {
        setActiveAnimation({ hover: id });
    };
    const onOut = () => {
        setActiveAnimation({ hover: null });
    };
    const entries = filtersList(lang);

    return (
        <FilterListWrapper>
            <ScrollBar>
                <IsoTopeGrid
                    // @ts-ignore
                    gridLayout={entries}
                    noOfCols={1}
                    unitWidth={100}
                    unitHeight={250}
                    filters={filters}
                >
                    {entries.map((card: CardType) => (
                        <Link
                            scroll={false}
                            href="/projects/[projectId]"
                            as={card.link}
                            key={card.id}
                        >
                            <Card>
                                <CardItem
                                    onMouseOver={() => onHover(card.id)}
                                    onMouseOut={onOut}
                                >
                                    <CardInner>
                                        <CardImage>
                                            <Image src={card.imageLink} />
                                        </CardImage>
                                        <CardContent>
                                            <CardInfo>
                                                <CardInfoInner>
                                                    <CardService>
                                                        {card.category.join(
                                                            ', ',
                                                        )}
                                                    </CardService>
                                                    <CardDate>
                                                        {card.date}
                                                    </CardDate>
                                                </CardInfoInner>
                                                <CardLinkWrapper>
                                                    <CardLink
                                                        activeAnimation={
                                                            activeAnimation.hover ===
                                                            card.id
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
                                                    </CardLink>
                                                </CardLinkWrapper>
                                            </CardInfo>
                                            <CardTitle>{card.title}</CardTitle>
                                            <CardText>{card.text}</CardText>
                                        </CardContent>
                                    </CardInner>
                                </CardItem>
                            </Card>
                        </Link>
                    ))}
                </IsoTopeGrid>
            </ScrollBar>
        </FilterListWrapper>
    );
};

export default FilterList;
