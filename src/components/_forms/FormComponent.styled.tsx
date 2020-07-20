import styled from 'styled-components';
import Button from '@components/_universal/Button/Button';

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

    &.error {
        Input {
            border: 1px solid ${({ theme }) => theme.colors.red};
        }
        span {
            height: 16px;
            transform: translateY(8px);
        }
    }
`;

export const InputLabel = styled.label`
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    line-height: 3.4;
    width: 200px;
`;

export const Input = styled.input`
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.default}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    height: 48px;
    line-height: 1.7;
    outline: 0;
    padding: 0 24px;
    transition: all ${({ theme }) => theme.transitions.default}s;
    width: 450px;

    & :focus {
        box-shadow: 0 0 28px rgba(9, 90, 90, 0.1);
    }
`;

export const InputError = styled.span`
    color: ${({ theme }) => theme.colors.red};
    display: flex;
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    height: 0;
    justify-content: flex-end;
    transform: translateY(0);
    transition: all ${({ theme }) => theme.transitions.default}s;
`;

export const TextArea = styled.textarea`
    background: ${({ theme }) => theme.colors.white};
    border: 0;
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
        box-shadow: 0 0 28px rgba(9, 90, 90, 0.1);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ButtonForm = styled(Button)`
    width: 450px;
`;
