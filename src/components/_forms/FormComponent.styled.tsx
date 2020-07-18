import styled from "styled-components";

export const FormWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  display: flex;
`;

export const InputLabel = styled.label`
  width: 200px;
`;

export const Input = styled.input``;

export const TextArea = styled.textarea``;
