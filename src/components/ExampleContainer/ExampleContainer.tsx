import React from "react";
import { ExampleWrapper, ExampleTitle } from "./ExampleContainer.styled";

type IProps = {
  title?: string;
};

const ExampleContainer: React.FC<IProps> = ({ title }) => {
  return (
    <ExampleWrapper>
      <ExampleTitle>
        Next.js + HTML + Styled Components + TypeScript Boilerplate
      </ExampleTitle>
    </ExampleWrapper>
  );
};

export default ExampleContainer;
