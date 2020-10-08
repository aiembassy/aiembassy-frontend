import * as React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import events from '@shared/data/events';
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
    return (
        <EventsListWrapper>
            <ScrollBar>
                {Object.keys(events).map((eventId) => {
                    const event = events[eventId];
                    const eventLinkLocation = `/events/${eventId}`;

                    return (
                        <Event key={eventLinkLocation}>
                            <EventImage>
                                <Image src={event.imagePath} />
                            </EventImage>
                            <EventContentWrapper>
                                <EventDate>{event.date}</EventDate>
                                <EventTitle>{event.shortTitle}</EventTitle>
                                <EventDescription>
                                    {event.shortDescription}
                                </EventDescription>
                                <Link
                                    scroll={false}
                                    href="/events/[eventId]"
                                    as={eventLinkLocation}
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
                    );
                })}
            </ScrollBar>
        </EventsListWrapper>
    );
};

export default EventsList;
