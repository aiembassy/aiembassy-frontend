import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import {
    MenuWrapper,
    MenuItem,
    MenuLink,
    MenuContainer,
    ModalLink,
    MobileMenuContainer,
    MobileMenuWrapper,
    MobileMenuLink,
    MobileMenuItem,
    MenuIcon,
    MenuBar,
} from './Menu.styled';

interface IScrollSpy {
    scrollTargetIds: string[];
    offset: number;
    activeNavClass: string;
    scrollDuration: string;
    headerBackground: string;
}

const ScrollspyNav = dynamic<IScrollSpy>(import('react-scrollspy-nav'), {
    ssr: false,
});

const Menu: React.FC = () => {
    const { t, lang } = useTranslation('menu');

    const breakpoint = 1200;
    const [width, setWidth] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    const openMenuHandler = () => {
        setIsOpen(isOpen === false);
    };

    return width < breakpoint ? (
        // MOBILE
        <>
            <MenuIcon openMenu={isOpen} onClick={() => openMenuHandler()}>
                <MenuBar />
                <MenuBar />
                <MenuBar />
            </MenuIcon>
            <MobileMenuContainer openMenu={isOpen}>
                <ScrollspyNav
                    scrollTargetIds={[
                        'about',
                        'projects',
                        'team',
                        'media',
                        'conferences',
                        'contact',
                    ]}
                    offset={-100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="false"
                >
                    <MobileMenuWrapper>
                        <MobileMenuItem>
                            <MobileMenuLink href="#about">
                                {t('about_foundation')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#projects">
                                {t('projects')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#team">
                                {t('team')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#media">
                                {t('media')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#conferences">
                                {t('events')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#contact">
                                {t('contact')}
                            </MobileMenuLink>
                        </MobileMenuItem>
                    </MobileMenuWrapper>
                </ScrollspyNav>
            </MobileMenuContainer>
        </>
    ) : (
        // DESKTOP
        <MenuContainer>
            <ScrollspyNav
                scrollTargetIds={[
                    'about',
                    'projects',
                    'team',
                    'media',
                    'conferences',
                    'contact',
                ]}
                offset={0}
                activeNavClass="is-active"
                scrollDuration="1000"
                headerBackground="false"
            >
                <MenuWrapper>
                    <MenuItem>
                        <MenuLink href="#about">
                            {t('about_foundation')}
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#projects">{t('projects')}</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#team">{t('team')}</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#media">{t('media')}</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#conferences">{t('events')}</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#contact">{t('contact')}</MenuLink>
                    </MenuItem>
                </MenuWrapper>
            </ScrollspyNav>
            <ModalLink>
                <Link scroll={false} href="/workshops" as="/workshops">
                    <MenuLink>{t('workshops')}</MenuLink>
                </Link>
            </ModalLink>
        </MenuContainer>
    );
};

export default Menu;
