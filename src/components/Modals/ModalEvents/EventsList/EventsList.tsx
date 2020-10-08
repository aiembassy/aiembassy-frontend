import * as React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import {
    EventsListWrapper,
    Event,
    EventImage,
    Image,
    EventContentWrapper,
    EventDate,
    EventTitle,
    EventDescription,
    EventLink,
    EventLinkWrapper,
} from './EventsList.styled';

const EventsList = () => {
    const itemsList = new Array(15).fill(1);

    return (
        <EventsListWrapper>
            <ScrollBar>
                {itemsList.map((item, index) => (
                    <Event key={index}>
                        <EventImage>
                            <Image src="/images/smogathon.png" />
                        </EventImage>
                        <EventContentWrapper>
                            <EventDate>Styczeń 2020</EventDate>
                            <EventTitle>Tutaj kolejna nazwa</EventTitle>
                            <EventDescription>
                                Lorem ipsum dolor sit amet, consectetur adLorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Ac tincidunt ut dictumst urna dictum
                                nulla. ipiscing elit. Ac tincidunt ut dictumst
                                urna dictum nulla.
                            </EventDescription>
                            <Link
                                scroll={false}
                                href="/events/[eventId]"
                                as="/events/konferencja-1"
                            >
                                <EventLinkWrapper>
                                    <EventLink
                                        buttonType="TRANSPARENT"
                                        iconType="IconArrowRight"
                                        iconSize={20}
                                        iconActiveColor={['green_hover']}
                                        noPadding
                                    >
                                        więcej
                                    </EventLink>
                                </EventLinkWrapper>
                            </Link>
                        </EventContentWrapper>
                    </Event>
                ))}
            </ScrollBar>
        </EventsListWrapper>
    );
};

export default EventsList;
