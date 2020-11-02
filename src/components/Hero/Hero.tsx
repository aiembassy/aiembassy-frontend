import React, { useState, useEffect } from 'react';
import { Container } from '@shared/styles/global.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import Menu from '@components/Menu/Menu';
import Link from 'next/link';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import {
    HeroWrapper,
    Header,
    LinkWrapper,
    HeroTitle,
    HeroSubtitle,
    HeroSmallImage,
    HeroMiddleImage,
    HeroBigImage,
    CircleWhite,
    CircleGreen,
    ButtonWrapper,
} from './Hero.styled';

const Hero: React.FC = () => {
    const [headerClassName, setHeaderClassName] = useState('');
    const handleScroll = () =>
        setHeaderClassName(window.scrollY > 0 ? 'scrolling' : '');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeroWrapper>
            <Header className={headerClassName}>
                <Container>
                    <LinkWrapper href="/">
                        <IconManager name="IconBrandWhite" size={100} />
                    </LinkWrapper>
                    <Menu />
                </Container>
            </Header>
            <Container className="hero-inner">
                <HeroTitle as="h1">
                    Fundacja AI Embassy wspiera rewolucję AI w Polsce
                </HeroTitle>
                <HeroSubtitle>
                    Zobacz, jak możemy Ci pomóc zostać częścią nadciągającej
                    zmiany!
                </HeroSubtitle>
                <Link scroll={false} href="/workshops" as="/workshops">
                    <ButtonWrapper>
                        <ButtonLink buttonType="SECONDARY">
                            sprawdź naszą ofertę
                        </ButtonLink>
                    </ButtonWrapper>
                </Link>
                <HeroSmallImage />
                <HeroMiddleImage />
                <HeroBigImage />
                <CircleWhite name="IconCircle" size={23} />
                <CircleGreen name="IconCircle" size={37} fill={['green']} />
            </Container>
        </HeroWrapper>
    );
};

export default Hero;
