import Head from "next/head";
import React from "react";
import HomePage from "@components/ExampleContainer/ExampleContainer";

const Home = () => {
  return (
    <div className="container">
      <HomePage />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
