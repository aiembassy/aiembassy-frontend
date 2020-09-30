import React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { Container } from '@shared/styles/global.styled';
import {
    SectionTitle,
    OpinionsWrapper,
    OpinionsList,
    OpinionItem,
    OpinionText,
    OpinionSource,
    IconQuote,
    SeparateDots,
    Dot,
} from './Opinions.styled';

const Opinions: React.FC = () => {
    return (
        <OpinionsWrapper id="media">
            <Container>
                <SectionTitle>Piszą o nas</SectionTitle>
                <OpinionsList>
                    <IconQuote name="IconQuote" size={294} />
                    <ScrollBar>
                        <OpinionItem>
                            <OpinionText>
                                “Rozdano nagrody w kategoriach:
                                <br /> Identyfikacja Źródeł Zanieczyszczenia
                                Powietrza (patron kategorii: Krakowski Alarm
                                Smogowy) – Zespół <strong>AI Embassy</strong>:
                                Innowacyjna Metoda analizy danych o
                                zanieczyszczeniu korzystająca z danych
                                satelitarnych oraz sztucznej inteligencji.”
                            </OpinionText>
                            <OpinionSource>smogathon.com.pl</OpinionSource>
                        </OpinionItem>
                        <SeparateDots>
                            <Dot />
                            <Dot />
                            <Dot />
                        </SeparateDots>
                        <OpinionItem>
                            <OpinionText>
                                “W kategorii Identyfikacja źródeł
                                zanieczyszczenia powietrza najlepszy okazał się
                                zespół <strong>AI Embassy</strong>. Przedstawił
                                on innowacyjną metodę analizy danych o
                                zanieczyszczeniu korzystającą z danych
                                satelitarnych oraz sztucznej inteligencji.”
                            </OpinionText>
                            <OpinionSource>firma.rp.pl</OpinionSource>
                        </OpinionItem>
                        <SeparateDots>
                            <Dot />
                            <Dot />
                            <Dot />
                        </SeparateDots>
                        <OpinionItem>
                            <OpinionText>
                                “Rozdano nagrody w kategoriach:
                                <br /> Identyfikacja Źródeł Zanieczyszczenia
                                Powietrza (patron kategorii: Krakowski Alarm
                                Smogowy) – Zespół <strong>AI Embassy</strong>:
                                Innowacyjna Metoda analizy danych o
                                zanieczyszczeniu korzystająca z danych
                                satelitarnych oraz sztucznej inteligencji.”
                            </OpinionText>
                            <OpinionSource>smogathon.com.pl</OpinionSource>
                        </OpinionItem>
                        <SeparateDots>
                            <Dot />
                            <Dot />
                            <Dot />
                        </SeparateDots>
                        <OpinionItem>
                            <OpinionText>
                                “W kategorii Identyfikacja źródeł
                                zanieczyszczenia powietrza najlepszy okazał się
                                zespół <strong>AI Embassy</strong>. Przedstawił
                                on innowacyjną metodę analizy danych o
                                zanieczyszczeniu korzystającą z danych
                                satelitarnych oraz sztucznej inteligencji.”
                            </OpinionText>
                            <OpinionSource>firma.rp.pl</OpinionSource>
                        </OpinionItem>
                        <SeparateDots>
                            <Dot />
                            <Dot />
                            <Dot />
                        </SeparateDots>
                        <OpinionItem>
                            <OpinionText>
                                “Rozdano nagrody w kategoriach:
                                <br /> Identyfikacja Źródeł Zanieczyszczenia
                                Powietrza (patron kategorii: Krakowski Alarm
                                Smogowy) – Zespół <strong>AI Embassy</strong>:
                                Innowacyjna Metoda analizy danych o
                                zanieczyszczeniu korzystająca z danych
                                satelitarnych oraz sztucznej inteligencji.”
                            </OpinionText>
                            <OpinionSource>smogathon.com.pl</OpinionSource>
                        </OpinionItem>
                    </ScrollBar>
                </OpinionsList>
            </Container>
        </OpinionsWrapper>
    );
};

export default Opinions;
