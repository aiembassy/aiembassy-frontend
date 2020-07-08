import React from "react";
import { NextPage } from "next";

const Link: NextPage = (props) => {
  console.log(props);
  return <h1>Link page</h1>;
};

Link.getInitialProps = async (ctx) => {
  return { prop_1: "Prop1", prop_2: "Prop2" };
};

export default Link;
