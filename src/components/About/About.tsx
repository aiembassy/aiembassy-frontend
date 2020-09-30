import React from 'react';
import { Container } from '@shared/styles/global.styled';
import { LinkText } from '@shared/styles/typography.styled';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import {
    AboutWrapper,
    SectionDescription,
    SectionTitle,
    BoxList,
    BoxListInner,
    BoxItemSmall,
    BoxItemBig,
    BoxTitle,
    BoxDescription,
    IconA,
    IconI,
    IconE,
    SummaryText,
    SummaryWrapper,
    ButtonWrapper,
} from './About.styled';

const About: React.FC = () => {
    return (
        <AboutWrapper id="about">
            <Container>
                <SectionTitle>O fundacji</SectionTitle>
                <SectionDescription>
                    Sztuczna inteligencja będzie w najbliższych latach motorem
                    napędowym trwającej rewolucji naukowej. Fundacja AI Embassy
                    dąży do tego, aby to Polska stała się centrum tych
                    innowacji.
                </SectionDescription>
                <IconA name="IconLetterA" size={340} />
                <IconI name="IconLetterI" size={315} />
                <IconE name="IconLetterE" size={340} />
                <BoxList>
                    <BoxListInner>
                        <BoxItemSmall>
                            <BoxTitle>Bezpłatne szkolenia</BoxTitle>
                            <BoxDescription>
                                Wiedza jest kluczowym elementem, który pozwala
                                na wprowadzenie innowacji. AI Embassy łączy
                                ekspertów od sztucznej inteligencji z osobami,
                                które chciałyby rozwijać swoje kompetencje w tej
                                dziedzinie poprzez organizowanie{' '}
                                <Link
                                    scroll={false}
                                    href="/workshops"
                                    as="/workshops"
                                >
                                    <LinkText>
                                        <strong>darmowych </strong>
                                        szkoleń i warsztatów
                                    </LinkText>
                                </Link>
                                , również w formule online.
                            </BoxDescription>
                        </BoxItemSmall>
                        <BoxItemSmall>
                            <BoxTitle>Konferencje i wydarzenia</BoxTitle>
                            <BoxDescription>
                                Budowanie innowacji wymaga także stworzenia
                                działającej społeczności ekspertów, firm oraz
                                inwestorów. W tym celu fundacja uczestniczy w{' '}
                                <Link
                                    scroll={false}
                                    href="/events"
                                    as="/events"
                                >
                                    <LinkText>
                                        konferencjach i meetupach
                                    </LinkText>
                                </Link>
                                , a także organizuje własne wydarzenia.{' '}
                                <Link
                                    scroll={false}
                                    href="/contact"
                                    as="/contact"
                                >
                                    <LinkText>Skontaktuj się z nami</LinkText>
                                </Link>
                                , jeśli chciałbyś zbudować społeczność AI w
                                Twojej okolicy.
                            </BoxDescription>
                        </BoxItemSmall>
                    </BoxListInner>
                    <BoxListInner>
                        <BoxItemBig>
                            <BoxTitle>Wsparcie dla przedsiębiorstw</BoxTitle>
                            <BoxDescription>
                                Rewolucja AI wymaga zaangażowania ze strony
                                biznesu. Czy masz pomysł na implementację
                                rozwiązań opartych o sztuczną inteligencję, ale
                                jeszcze nie zacząłeś jej wdrażać? A może
                                potrzebujesz inspiracji w jaki sposób usprawnić
                                Twój biznes? Sprawdź naszą ofertę{' '}
                                <Link
                                    scroll={false}
                                    href="/workshops"
                                    as="/workshops"
                                >
                                    <LinkText>bezpłatnych szkoleń</LinkText>
                                </Link>{' '}
                                lub skontaktuj się z nami, aby porozmawiać o{' '}
                                <strong>darmowych usługach doradczych</strong>.
                            </BoxDescription>
                            <BoxDescription>
                                Jesteś firmą z sektora IT albo prowadzisz już
                                projekty AI i potrzebujesz wsparcia we wdrożeniu
                                sztucznej inteligencji?{' '}
                                <Link
                                    scroll={false}
                                    href="/contact"
                                    as="/contact"
                                >
                                    <LinkText>Skontaktuj się z nami</LinkText>
                                </Link>{' '}
                                na temat oferty{' '}
                                <strong>komercyjnej fundacji</strong> AI
                                Embassy.
                            </BoxDescription>
                        </BoxItemBig>
                    </BoxListInner>
                </BoxList>
            </Container>
            <Container>
                <SummaryWrapper>
                    <SummaryText>
                        Jeżeli tak jak my uważasz, że sztuczna inteligencja może
                        zrewolucjonizować przyszłość, wspomóż nasze działania i
                        przekaż dotację na rozwój fundacji.
                    </SummaryText>
                    <Link scroll={false} href="/donation" as="/help-us">
                        <ButtonWrapper>
                            <ButtonLink buttonType="PRIMARY" width={280}>
                                Wspomóż nas
                            </ButtonLink>
                        </ButtonWrapper>
                    </Link>
                </SummaryWrapper>
            </Container>
        </AboutWrapper>
    );
};

export default About;
