import React from 'react';
import { AppProps } from 'next/app';
import themeVariant from '@utils/themeVariant';
import { Theme } from '@@types/Theme';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyled } from '@shared/styles/global.styled';
import MetaTags from '@components/MetaTags/MetaTags';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
            <MetaTags />
            <Normalize />
            <GlobalStyled />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
