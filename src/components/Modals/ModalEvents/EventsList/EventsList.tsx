import * as React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import Link from 'next/link';
import events from '@shared/data/events';
import { ItemLink, ProjectItem } from '@components/Projects/Projects.styled';
import { useState } from 'react';
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
    const [activeAnimation, setActiveAnimation] = useState({ hover: null });
    const onHover = (id) => {
        setActiveAnimation({ hover: id });
    };
    const onOut = () => {
        setActiveAnimation({ hover: null });
    };
    return (
        <EventsListWrapper>
            <ScrollBar>
                {Object.keys(events).map((eventId) => {
                    const event = events[eventId];
                    const eventLinkLocation = `/events/${eventId}`;

                    return (
                        <Link
                            scroll={false}
                            href="/events/[eventId]"
                            as={eventLinkLocation}
                            key={eventLinkLocation}
                        >
                            <Event
                                onMouseOver={() => onHover(eventId)}
                                onMouseOut={onOut}
                            >
                                <EventImage>
                                    <Image src={event.imagePath} />
                                </EventImage>
                                <EventContentWrapper>
                                    <EventDate>{event.date}</EventDate>
                                    <EventTitle>{event.shortTitle}</EventTitle>
                                    <EventDescription>
                                        {event.shortDescription}
                                    </EventDescription>
                                    <EventLinkWrapper>
                                        <EventLink
                                            activeAnimation={
                                                activeAnimation.hover ===
                                                eventId
                                            }
                                            buttonType="TRANSPARENT"
                                            iconType="IconArrowRight"
                                            iconSize={20}
                                            iconActiveColor={['green_hover']}
                                            noPadding
                                        >
                                            więcej
                                        </EventLink>
                                    </EventLinkWrapper>
                                </EventContentWrapper>
                            </Event>
                        </Link>
                    );
                })}
            </ScrollBar>
        </EventsListWrapper>
    );
};

export default EventsList;
