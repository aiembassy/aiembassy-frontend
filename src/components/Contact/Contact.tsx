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
                        Rynek Główny 28, 31-010 Kraków <br />
                        NIP 6762576428 <br />
                        Nr konta 00 1111 2222 3333 4444 5555 6666
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac tincidunt ut dictumst urna dictum nulla. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Ac
                        tincidunt ut dictumst urna dictum nulla.
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
