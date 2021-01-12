import React from 'react';
import ButtonLink from '@components/_universal/ButtonLink/ButtonLink';
import Link from 'next/link';
import {
    ContactWrapper,
    ContainerInner,
    ContactBgImage,
    ContactBg,
    ContainerWrapper,
    IconBrand,
    TextBox,
    Text,
    InfoBox,
    TitleBox,
    MailToLink,
    Icon,
    ButtonWrapper,
    LinkWrapper,
    OpenFormButton,
} from './Contact.styled';

const Contact: React.FC = () => {
    return (
        <ContactWrapper id="contact">
            <ContainerWrapper>
                <IconBrand name="IconBrand" size={127} sizeY={77} />
            </ContainerWrapper>
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
                    <Text>lub wypełnij</Text>
                    <Link scroll={false} href="/contact" as="/contact">
                        <LinkWrapper>
                            <OpenFormButton buttonType="TRANSPARENT">
                                <Icon
                                    className="IconContact"
                                    name="IconContact"
                                    size={27}
                                />
                                formularz kontaktowy
                            </OpenFormButton>
                        </LinkWrapper>
                    </Link>
                </InfoBox>
                <InfoBox>
                    <TitleBox>Wspomóż nas</TitleBox>
                    <TextBox>
                        Działania prowadzone przez fundację wymagają nakładów
                        finansowych. Jeśli również uważasz, że AI może być nową
                        rewolucją i chcesz wesprzeć jej rozwój w Polsce, to
                        wspomóż nasze wysiłki przez przekazanie darowizny.
                    </TextBox>
                    <Link scroll={false} href="/donation" as="/help-us">
                        <ButtonWrapper>
                            <ButtonLink buttonType="PRIMARY" width={280}>
                                Wspomóż nas
                            </ButtonLink>
                        </ButtonWrapper>
                    </Link>
                </InfoBox>
            </ContainerInner>
        </ContactWrapper>
    );
};

export default Contact;
