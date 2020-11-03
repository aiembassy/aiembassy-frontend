import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
                                O fundacji
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#projects">
                                Projekty
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#team">Zespół</MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#media">Media</MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#conferences">
                                Wydarzenia
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink href="#contact">
                                Kontakt
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
                        <MenuLink href="#about">O fundacji</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#projects">Projekty</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#team">Zespół</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#media">Media</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#conferences">Wydarzenia</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#contact">Kontakt</MenuLink>
                    </MenuItem>
                </MenuWrapper>
            </ScrollspyNav>
            <ModalLink>
                <Link scroll={false} href="/workshops" as="/workshops">
                    <MenuLink>Oferta szkoleń</MenuLink>
                </Link>
            </ModalLink>
        </MenuContainer>
    );
};

export default Menu;
