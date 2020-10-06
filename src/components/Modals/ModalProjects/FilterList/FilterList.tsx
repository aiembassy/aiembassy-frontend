import * as React from 'react';
import IsoTopeGrid from 'react-isotope';
import { filtersList } from '@shared/data/projectsFilter';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
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
    return (
        <FilterListWrapper>
            <ScrollBar>
                <IsoTopeGrid
                    //@ts-ignore
                    gridLayout={filtersList}
                    noOfCols={1}
                    unitWidth={100}
                    unitHeight={250}
                    filters={filters}
                >
                    {filtersList.map((card: CardType) => (
                        <Card key={card.id}>
                            <CardItem>
                                <CardInner>
                                    <CardImage>
                                        <Image src={card.imageLink} />
                                    </CardImage>
                                    <CardContent>
                                        <CardInfo>
                                            <CardInfoInner>
                                                <CardService>
                                                    {card.category.join(', ')}
                                                </CardService>
                                                <CardDate>{card.date}</CardDate>
                                            </CardInfoInner>
                                            <Link
                                                scroll={false}
                                                href="/projects/[projectId]"
                                                as={card.link}
                                            >
                                                <CardLinkWrapper>
                                                    <CardLink
                                                        buttonType="TRANSPARENT"
                                                        iconType="IconArrowRight"
                                                        iconSize={20}
                                                        iconActiveColor={[
                                                            'green_hover',
                                                        ]}
                                                        noPadding
                                                    >
                                                        więcej
                                                    </CardLink>
                                                </CardLinkWrapper>
                                            </Link>
                                        </CardInfo>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardText>{card.text}</CardText>
                                    </CardContent>
                                </CardInner>
                            </CardItem>
                        </Card>
                    ))}
                </IsoTopeGrid>
            </ScrollBar>
        </FilterListWrapper>
    );
};

export default FilterList;
