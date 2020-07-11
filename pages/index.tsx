import Head from "next/head";
import React from "react";
import ExampleContainer from "@components/ExampleContainer/ExampleContainer";
import { ThemeProvider } from "styled-components";
import themeVariant from "@utils/themeVariant";
import { GlobalStyled } from "@shared/styles/global.styled";
import { Theme } from "@@types/Theme";

const Home = () => {
  return (
    <ThemeProvider theme={themeVariant[Theme.DEFAULT]}>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyled />
      <ExampleContainer />
    </ThemeProvider>
  );
};

export default Home;
