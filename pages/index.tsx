import React from "react";
import ExampleContainer from "@components/ExampleContainer/ExampleContainer";
import Layout from "@components/_layout/Layout.view";

const Home = () => {
  return (
    <Layout
      meta={{
        title: "Next BoilerPlate - Homepage",
        description: "HomePage component",
        keywords:
          "next, next.js, html, styled components, react, redux, typescript",
      }}
    >
      <ExampleContainer />
    </Layout>
  );
};

export default Home;
