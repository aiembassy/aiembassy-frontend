import React from 'react';
import { Container } from '@shared/styles/global.styled';
import {
    FooterWrapper,
    FooterLinks,
    FooterLink,
    FooterCopyrights,
    FooterSocials,
    LinkWrapper,
    LinkedIn,
    Facebook,
    Twitter,
} from './Footer.styled';

const Footer: React.FC = () => {
    return (
        <Container>
            <FooterWrapper>
                <FooterCopyrights>© 2020 AI Embassy</FooterCopyrights>
                <FooterLinks>
                    <FooterLink href="#">Polityka prywatności</FooterLink>
                    <FooterLink href="#">Statut fundacji</FooterLink>
                    <FooterLink href="#">Sprawozdania finansowe</FooterLink>
                </FooterLinks>
                <FooterSocials>
                    <LinkWrapper href="#">
                        <Facebook
                            name="IconFacebook"
                            size={21}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper href="#">
                        <Twitter
                            name="IconTwitter"
                            size={23}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper href="#">
                        <LinkedIn
                            name="IconLinkedIn"
                            size={21}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                </FooterSocials>
            </FooterWrapper>
        </Container>
    );
};

export default Footer;
