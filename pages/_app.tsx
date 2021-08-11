import React from 'react';
import themeVariant from '@utils/themeVariant';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { GlobalStyled } from '@shared/styles/global.styled';
import { Normalize } from 'styled-normalize';
import { Theme } from '@@types/Theme';
import { ThemeProvider } from 'styled-components';
import 'swiper/swiper-bundle.css';
import About from '@components/About/About';
import Benefits from '@components/Benefits/Benefits';
import Contact from '@components/Contact/Contact';
import Events from '@components/Events/Events';
import Footer from '@components/Footer/Footer';
import Hero from '@components/Hero/Hero';
import LandingContact from '@landing/LandingContact/LandingContact';
import LandingHeader from '@landing/LandingHeader/LandingHeader';
import LandingInformation from '@landing/LandingInformation/LandingInformation';
import LandingTraining from '@landing/LandingTraining/LandingTraining';
import LandingWorkshops from '@landing/LandingWorkshops/LandingWorkshops';
import LandingWorkshopsContainer from '@landing/LandingWorkshopsContainer/LandingWorkshopsContainer';
import MetaTags from '@components/MetaTags/MetaTags';
import Opinions from '@components/Opinions/Opinions';
import Projects from '@components/Projects/Projects';
import Team from '@components/Team/Team';

const App = ({ Component, pageProps, router }: AppProps) => {
    const { layout } = pageProps;

    return (
        <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
            <MetaTags />
            <Normalize />
            <GlobalStyled layout={layout} />
            {layout === 'landing' && (
                <>
                    <LandingHeader />
                    <LandingTraining />
                    <LandingInformation />
                    <LandingWorkshops landing maxItemsShow={12} />
                    <LandingContact />
                    <Footer landing />
                </>
            )}
            {layout === 'list' && (
                <>
                    <LandingHeader />
                    <LandingWorkshopsContainer landing />
                    <LandingContact />
                    <Footer landing />
                </>
            )}
            {!layout && (
                <>
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
                </>
            )}
            <div style={{ zIndex: 9999, position: 'relative' }}>
                <AnimatePresence>
                    <Component key={router.route} {...pageProps} />
                </AnimatePresence>
            </div>
        </ThemeProvider>
    );
};

export default App;
