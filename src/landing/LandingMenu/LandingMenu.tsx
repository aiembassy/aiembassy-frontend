import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    MenuWrapper,
    MenuItem,
    MenuLink,
    MenuContainer,
    MobileMenuContainer,
    MobileMenuWrapper,
    MobileMenuLink,
    MobileMenuItem,
    MenuIcon,
    MenuBar,
} from './LandingMenu.styled';

const LandingMenu: React.FC = () => {
    const breakpoint = 1200;
    const [width, setWidth] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

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
                <div>
                    <MobileMenuWrapper>
                        <MobileMenuItem>
                            <MobileMenuLink href="/">
                                Strona fundacji
                            </MobileMenuLink>
                        </MobileMenuItem>
                        <MobileMenuItem>
                            <MobileMenuLink
                                className={
                                    router.pathname === '/landing/list'
                                        ? 'is-active'
                                        : ''
                                }
                                href="/landing/list"
                            >
                                Lista szkoleń
                            </MobileMenuLink>
                        </MobileMenuItem>
                    </MobileMenuWrapper>
                </div>
            </MobileMenuContainer>
        </>
    ) : (
        // DESKTOP
        <MenuContainer>
            <div>
                <MenuWrapper>
                    <MenuItem>
                        <MenuLink href="/">
                            Strona fundacji
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink
                            className={
                                router.pathname === '/landing/list'
                                    ? 'is-active'
                                    : ''
                            }
                            href="/landing/list"
                        >
                            Lista szkoleń
                        </MenuLink>
                    </MenuItem>
                </MenuWrapper>
            </div>
        </MenuContainer>
    );
};

export default LandingMenu;
