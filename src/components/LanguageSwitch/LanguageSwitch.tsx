import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { LanguageSwitchWrapper, Pipe, LangLink } from './LanguageSwitch.styled';

interface IProps {
    landing?: boolean;
}

const LanguageSwitch: React.FC<IProps> = ({ landing }) => {
    const { t, lang } = useTranslation('common');

    return (
        <LanguageSwitchWrapper landing={landing}>
            <LangLink landing={landing} active={lang === 'pl'} href="/pl">
                PL
            </LangLink>{' '}
            <Pipe>|</Pipe>
            <LangLink landing={landing} active={lang === 'en'} href="/en">
                EN
            </LangLink>
        </LanguageSwitchWrapper>
    );
};

export default LanguageSwitch;
