import React from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { Container } from '@shared/styles/global.styled';
import useTranslation from 'next-translate/useTranslation';
import SwiperCore from 'swiper';
import opinions from '@shared/data/opinions';
import {
    SectionTitle,
    OpinionsWrapper,
    OpinionsList,
    OpinionItem,
    OpinionText,
    OpinionSource,
    IconLink,
    IconQuote,
    SeparateDots,
    Dot,
} from './Opinions.styled';

const Opinions: React.FC = () => {
    const { t, lang } = useTranslation('common');

    const opinionsList = opinions.map((opinion, index) => {
        return (
            <>
                <OpinionItem>
                    <OpinionText
                        dangerouslySetInnerHTML={{
                            __html: opinion.text,
                        }}
                    />
                    <OpinionSource href={opinion.source} target="_blank">
                        {opinion.sourceName}
                        <IconLink name="IconLink" size={20} />
                    </OpinionSource>
                </OpinionItem>
                <SeparateDots>
                    <Dot />
                    <Dot />
                    <Dot />
                </SeparateDots>
            </>
        );
    });

    return (
        <OpinionsWrapper id="media">
            <Container>
                <SectionTitle>{t('opinions_title')}</SectionTitle>
                <OpinionsList>
                    <IconQuote name="IconQuote" size={294} />
                    <ScrollBar>{opinionsList}</ScrollBar>
                </OpinionsList>
            </Container>
        </OpinionsWrapper>
    );
};

export default Opinions;
