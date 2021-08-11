import React from 'react';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import {
    ButtonWrapper,
    ContactBg,
    ContactBgImage,
    ContainerInner,
    Icon,
    IconBrand,
    InfoBox,
    LandingContactWrapper,
    LandingIconWrapper,
    MailToLink,
    TextBox,
    TitleBox,
} from './LandingContact.styled';

const LandingContact: React.FC = () => {
    return (
        <LandingContactWrapper id="contact">
            <LandingIconWrapper>
                <IconBrand name="IconBrand" size={127} sizeY={77} />
            </LandingIconWrapper>
            <ContactBgImage />
            <ContactBg />
            <ContainerInner>
                <InfoBox>
                    <TitleBox>Fundacja “AI Embassy”</TitleBox>
                    <TextBox>
                        ul. Podskale 1A/6, 30-522 Kraków <br />
                        KRS 0000823425 <br />
                        NIP 6762576428 <br />
                        REGON 385300695 <br />
                        Nr konta <b>32 1600 1462 1885 3945 8000 0001</b>
                    </TextBox>
                    <MailToLink href="mailto:contact@embassy.ai">
                        <Icon
                            className="IconMail"
                            name="IconMail"
                            size={25}
                            fill={['yellow']}
                        />
                        contact@embassy.ai
                    </MailToLink>
                </InfoBox>
                <InfoBox>
                    <TitleBox>Nie nalazłeś szkolenia dla siebie?</TitleBox>
                    <TextBox>
                        Napisz do nas, porozmawiamy i spróbujemy przygotować
                        ofertę dostosowaną do potrzeb Twojej firmy i Twoich
                        pracowników.
                    </TextBox>
                    <Link scroll={false} href="/contact" as="/help-us">
                        <ButtonWrapper>
                            <ButtonLink buttonType="PRIMARY" width={280}>
                                Napisz do nas
                            </ButtonLink>
                        </ButtonWrapper>
                    </Link>
                </InfoBox>
            </ContainerInner>
        </LandingContactWrapper>
    );
};

export default LandingContact;
