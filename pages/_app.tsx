import React from 'react';
import { AppProps } from 'next/app';
import themeVariant from '@utils/themeVariant';
import { Theme } from '@@types/Theme';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyled } from '@shared/styles/global.styled';
import { AnimatePresence } from 'framer-motion';
import 'swiper/swiper-bundle.css';
import MetaTags from '@components/MetaTags/MetaTags';
import Hero from '@components/Hero/Hero';
import About from '@components/About/About';
import Benefits from '@components/Benefits/Benefits';
import Projects from '@components/Projects/Projects';
import Team from '@components/Team/Team';
import Opinions from '@components/Opinions/Opinions';
import Events from '@components/Events/Events';
import Contact from '@components/Contact/Contact';
import Footer from '@components/Footer/Footer';

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
            <MetaTags />
            <Normalize />
            <GlobalStyled />
            <Hero />
            <About />
            <Benefits />
            <Projects />
            <Team />
            <Opinions />
            {/* <Support /> */}
            <Events />
            <Contact />
            <Footer />
            <div style={{ zIndex: 1000, position: 'relative' }}>
                <AnimatePresence>
                    <Component key={router.route} {...pageProps} />
                </AnimatePresence>
            </div>
        </ThemeProvider>
    );
};

export default App;
