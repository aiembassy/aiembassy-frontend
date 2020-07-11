import styled from "styled-components";
import { Title } from "@shared/styles/typography.styled";

export const ExampleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const ExampleTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.blue};
`;
