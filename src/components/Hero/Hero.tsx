import React, { useState, useEffect } from 'react';
import { Container } from '@shared/styles/global.styled';
import IconManager from '@components/_universal/IconManager/IconManager';
import Menu from '@components/Menu/Menu';
import Link from 'next/link';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import useTranslation from 'next-translate/useTranslation';
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
    const { t, lang } = useTranslation('common');

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
                <HeroTitle as="h1">{t('hero_title')}</HeroTitle>
                <HeroSubtitle>{t('hero_subtitle')}</HeroSubtitle>
                <Link scroll={false} href="/workshops" as="/workshops">
                    <ButtonWrapper>
                        <ButtonLink buttonType="SECONDARY">
                            {t('hero_check_our_offer')}
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
