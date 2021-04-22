import React from 'react';
import { Container } from '@shared/styles/global.styled';
import { LinkText } from '@shared/styles/typography.styled';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
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
    const { t, lang } = useTranslation('about');

    return (
        <AboutWrapper id="about">
            <Container>
                <SectionTitle>{t('common:about_title')}</SectionTitle>
                <SectionDescription>
                    {t('common:about_description')}
                </SectionDescription>
                <IconA name="IconLetterA" size={340} />
                <IconI name="IconLetterI" size={315} />
                <IconE name="IconLetterE" size={340} />
                <BoxList>
                    <BoxListInner>
                        <BoxItemSmall>
                            <BoxTitle>
                                {t('common:free_workshops_title')}
                            </BoxTitle>
                            <BoxDescription>
                                {t('free_workshops_intro')}{' '}
                                <Link
                                    scroll={false}
                                    href="/workshops"
                                    as="/workshops"
                                >
                                    <LinkText
                                        dangerouslySetInnerHTML={{
                                            __html: t('workshops_link'),
                                        }}
                                    />
                                </Link>
                                {t('free_workshops_outro')}
                            </BoxDescription>
                        </BoxItemSmall>
                        <BoxItemSmall>
                            <BoxTitle>{t('common:conferences_title')}</BoxTitle>
                            <BoxDescription>
                                {t('conferences_intro')}{' '}
                                <Link
                                    scroll={false}
                                    href="/events"
                                    as="/events"
                                >
                                    <LinkText
                                        dangerouslySetInnerHTML={{
                                            __html: t('conferences_link'),
                                        }}
                                    />
                                </Link>
                                {t('conferences_middle')}{' '}
                                <Link
                                    scroll={false}
                                    href="/contact"
                                    as="/contact"
                                >
                                    <LinkText
                                        dangerouslySetInnerHTML={{
                                            __html: t('contact_link'),
                                        }}
                                    />
                                </Link>
                                {t('conferences_outro')}
                            </BoxDescription>
                        </BoxItemSmall>
                    </BoxListInner>
                    <BoxListInner>
                        <BoxItemBig>
                            <BoxTitle>
                                {t('common:business_support_title')}
                            </BoxTitle>
                            <BoxDescription>
                                {t('business_intro')}{' '}
                                <Link
                                    scroll={false}
                                    href="/workshops"
                                    as="/workshops"
                                >
                                    <LinkText
                                        dangerouslySetInnerHTML={{
                                            __html: t('free_trainings_link'),
                                        }}
                                    />
                                </Link>{' '}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: t('business_outro'),
                                    }}
                                />
                            </BoxDescription>
                            <BoxDescription>
                                {t('commercial_intro')}{' '}
                                <Link
                                    scroll={false}
                                    href="/contact"
                                    as="/contact"
                                >
                                    <LinkText
                                        dangerouslySetInnerHTML={{
                                            __html: t('contact_link'),
                                        }}
                                    />
                                </Link>{' '}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: t('commercial_outro'),
                                    }}
                                />
                            </BoxDescription>
                        </BoxItemBig>
                    </BoxListInner>
                </BoxList>
            </Container>
            <Container>
                <SummaryWrapper>
                    <SummaryText>{t('common:summary_text')}</SummaryText>
                    <Link scroll={false} href="/donation" as="/help-us">
                        <ButtonWrapper>
                            <ButtonLink buttonType="PRIMARY" width={280}>
                                {t('common:summary_support_us')}
                            </ButtonLink>
                        </ButtonWrapper>
                    </Link>
                </SummaryWrapper>
            </Container>
        </AboutWrapper>
    );
};

export default About;
