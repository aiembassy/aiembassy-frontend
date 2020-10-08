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
                    <LinkWrapper href="https://www.facebook.com/AIEmbassy">
                        <Facebook
                            name="IconFacebook"
                            size={21}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper href="https://twitter.com/AIEmbassy">
                        <Twitter
                            name="IconTwitter"
                            size={23}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper href="https://www.linkedin.com/company/ai-embassy">
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
