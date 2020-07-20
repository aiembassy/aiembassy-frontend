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

export const InputWrapper = styled.div<{ marginBottom?: number }>`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: 3.4;
  width: 200px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: 0 0 28px rgba(9, 90, 90, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.default}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  height: 48px;
  line-height: 1.7;
  outline: 0;
  padding: 0 24px;
  width: 450px;

  & :focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  margin-top: 8px;
`;

export const TextArea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: 0;
  box-shadow: 0 0 28px rgba(9, 90, 90, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.default}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  height: 105px;
  line-height: 1.7;
  outline: 0;
  padding: 18px 24px;
  resize: none;
  width: 450px;

  & :focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonForm = styled.button`
  background: linear-gradient(180deg, #287871 0%, #006666 100%);
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.button}px;
  color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 48px;
  font-size: 13px;
  letter-spacing: 0.22em;
  outline: 0;
  text-transform: uppercase;
  width: 450px;

  & :hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;
