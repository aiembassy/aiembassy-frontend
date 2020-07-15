import React from "react";
import Form from "@components/_forms/Form";
import { ExampleWrapper, ExampleTitle } from "./ExampleContainer.styled";

const ExampleContainer: React.FC = () => {
  return (
    <ExampleWrapper>
      <ExampleTitle>
        Next.js + HTML + Styled Components + TypeScript Boilerplate
      </ExampleTitle>
      <Form />
    </ExampleWrapper>
  );
};

export default ExampleContainer;
