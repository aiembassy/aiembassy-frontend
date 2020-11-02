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
                    <FooterLink
                        href="/docs/polityka_prywatnosci.pdf"
                        target="_blank"
                    >
                        Polityka prywatności
                    </FooterLink>
                    <FooterLink
                        href="/docs/statut_aiembassy.pdf"
                        target="_blank"
                    >
                        Statut fundacji
                    </FooterLink>
                </FooterLinks>
                <FooterSocials>
                    <LinkWrapper
                        href="https://www.facebook.com/AIEmbassy"
                        target="_blank"
                    >
                        <Facebook
                            name="IconFacebook"
                            size={21}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper
                        href="https://twitter.com/AIEmbassy"
                        target="_blank"
                    >
                        <Twitter
                            name="IconTwitter"
                            size={23}
                            activeFill={['green_hover']}
                        />
                    </LinkWrapper>
                    <LinkWrapper
                        href="https://www.linkedin.com/company/ai-embassy"
                        target="_blank"
                    >
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
