import React, { useLayoutEffect } from 'react';
import { Container } from '@shared/styles/global.styled';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import events from '@shared/data/events';
import {
    SectionTitle,
    DotsBg,
    EventsWrapper,
    EventsSliderWrapper,
    EventsSliderInner,
    SliderNavigation,
    ButtonPrev,
    ButtonNext,
    SliderItem,
    SliderContentWrapper,
    SliderImage,
    Image,
    PostData,
    PostTitle,
    PostDescription,
    PostLinkWrapper,
    PostLink,
    ButtonWrapper,
} from './Events.styled';

const Events: React.FC = () => {
    useLayoutEffect(() => {
        SwiperCore.use([Navigation]);
    }, []);

    const eventList = Object.keys(events).map((eventId) => {
        const event = events[eventId];
        const eventLinkLocation = `/events/${eventId}`;

        return (
            <SliderItem key={eventLinkLocation}>
                <SliderImage>
                    <Image src={event.imagePath} />
                </SliderImage>
                <SliderContentWrapper>
                    <PostData>{event.date}</PostData>
                    <PostTitle>{event.shortTitle}</PostTitle>
                    <PostDescription>{event.shortDescription}</PostDescription>
                    <Link
                        scroll={false}
                        href="/events/[eventId]"
                        as={eventLinkLocation}
                    >
                        <PostLinkWrapper>
                            <PostLink
                                buttonType="TRANSPARENT"
                                iconType="IconArrowRight"
                                iconSize={20}
                                iconActiveColor={['green_hover']}
                                noPadding
                            >
                                więcej
                            </PostLink>
                        </PostLinkWrapper>
                    </Link>
                </SliderContentWrapper>
            </SliderItem>
        );
    });

    return (
        <EventsWrapper id="conferences">
            <DotsBg name="IconDotsLeft" size={666} sizeY={1253} />
            <Container>
                <EventsSliderWrapper>
                    <EventsSliderInner>
                        <SectionTitle>Wydarzenia i konferencje</SectionTitle>
                        <SliderNavigation>
                            <ButtonPrev className="button-prev">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="24"
                                    viewBox="0 0 14 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12.7616 0.15301C12.5131 0.0500089 12.2531 9.68912e-06 11.9956 9.71163e-06C11.4751 9.75714e-06 10.9641 0.20451 10.5766 0.592011L0.528592 10.797C0.514092 10.812 0.499593 10.8275 0.486092 10.843C-0.162908 11.5905 -0.162908 12.718 0.486093 13.465C0.503093 13.485 0.521093 13.504 0.539594 13.522L10.5821 23.4105C11.1556 23.984 12.0111 24.1545 12.7616 23.844C13.5116 23.5335 13.9961 22.8085 13.9961 21.9965L13.9961 2.00051C13.9961 1.18851 13.5116 0.463509 12.7616 0.15301Z"
                                        fill="#C9C9C9"
                                    />
                                </svg>
                            </ButtonPrev>
                            <ButtonNext className="button-next">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="24"
                                    viewBox="0 0 15 24"
                                    fill="none"
                                >
                                    <path
                                        d="M2.23059 23.8441C2.47909 23.9471 2.73909 23.9971 2.99659 23.9971C3.51709 23.9971 4.02809 23.7926 4.41559 23.4051L14.4636 13.2001C14.4781 13.1851 14.4926 13.1696 14.5061 13.1541C15.1551 12.4066 15.1551 11.2791 14.5061 10.5321C14.4891 10.5121 14.4711 10.4931 14.4526 10.4751L4.41009 0.586559C3.83659 0.0130591 2.98109 -0.157441 2.23059 0.153059C1.48059 0.463559 0.996094 1.18856 0.996094 2.00056V21.9966C0.996094 22.8086 1.48059 23.5336 2.23059 23.8441Z"
                                        fill="#C9C9C9"
                                    />
                                </svg>
                            </ButtonNext>
                        </SliderNavigation>
                    </EventsSliderInner>

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev',
                        }}
                    >
                        <SwiperSlide>{eventList}</SwiperSlide>
                    </Swiper>
                    <Link scroll={false} href="/events" as="/events">
                        <ButtonWrapper>
                            <ButtonLink buttonType="PRIMARY" width={280}>
                                Zobacz wydarzenia
                            </ButtonLink>
                        </ButtonWrapper>
                    </Link>
                </EventsSliderWrapper>
            </Container>
        </EventsWrapper>
    );
};

export default Events;
