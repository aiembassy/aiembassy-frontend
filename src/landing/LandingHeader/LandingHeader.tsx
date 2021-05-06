import React, { useState, useEffect } from 'react';
import IconManager from '@components/_universal/IconManager/IconManager';
import LandingMenu from '@landing/LandingMenu/LandingMenu';
import {
    LandingHeaderInner,
    LandingHeaderWrapper,
    LinkWrapper,
} from './LandingHeader.styled';

const LandingHeader: React.FC = () => {
    const [headerClassName, setHeaderClassName] = useState('');
    const handleScroll = () =>
        setHeaderClassName(window.scrollY > 0 ? 'scrolling' : '');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <LandingHeaderWrapper className={headerClassName}>
            <LandingHeaderInner>
                <LinkWrapper href="/">
                    <IconManager name="IconBrand" size={109} />
                </LinkWrapper>
                <LandingMenu />
            </LandingHeaderInner>
        </LandingHeaderWrapper>
    );
};

export default LandingHeader;
