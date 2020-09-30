import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
    MenuWrapper,
    MenuItem,
    MenuLink,
    MenuContainer,
    ModalLink,
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
    return (
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
