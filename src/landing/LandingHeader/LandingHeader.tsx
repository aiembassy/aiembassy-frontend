import React, { useState, useEffect } from 'react';
import IconManager from '@components/_universal/IconManager/IconManager';
import LandingMenu from '@landing/LandingMenu/LandingMenu';
import LanguageSwitch from '@components/LanguageSwitch/LanguageSwitch';
import {
    LandingHeaderContainerWrapper,
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
        <LandingHeaderContainerWrapper className={headerClassName}>
            <LandingHeaderInner>
                <LinkWrapper href="/">
                    <IconManager name="IconBrand" size={109} />
                </LinkWrapper>
                <LandingHeaderWrapper>
                    <LandingMenu />
                    <LanguageSwitch landing />
                </LandingHeaderWrapper>
            </LandingHeaderInner>
        </LandingHeaderContainerWrapper>
    );
};

export default LandingHeader;
