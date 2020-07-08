import React from "react";
import {
  ExampleWrapper,
  Title,
} from "@components/ExampleContainer/ExampleContainer.styled";

type IProps = {
  title?: string;
};

const ExampleContainer: React.FC<IProps> = ({ title }) => {
  return (
    <ExampleWrapper>
      <Title>Next.js + HTML + Styled Components + TypeScript Boilerplate</Title>
    </ExampleWrapper>
  );
};

export default ExampleContainer;
