import React from 'react';
import { LanguageSwitchWrapper, Pipe, LangLink } from './LanguageSwitch.styled';

interface IProps {
    landing?: boolean;
}

const LanguageSwitch: React.FC<IProps> = ({ landing }) => {
    return (
        <LanguageSwitchWrapper landing={landing}>
            <LangLink landing={landing} active href="">
                PL
            </LangLink>{' '}
            <Pipe>|</Pipe>
            <LangLink landing={landing} href="">
                EN
            </LangLink>
        </LanguageSwitchWrapper>
    );
};

export default LanguageSwitch;
