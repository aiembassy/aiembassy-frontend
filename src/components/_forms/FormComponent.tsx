import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { LinkText } from '@shared/styles/typography.styled';
import { FooterLink } from '@components/Footer/Footer.styled';
import {
    FormWrapper,
    Form,
    InputWrapper,
    InputField,
    InputLabel,
    Input,
    InputError,
    TextArea,
    ButtonForm,
    ButtonWrapper,
    PrivatePolicy,
} from './FormComponent.styled';

interface IFormInputs {
    fullName: string;
    company: string;
    email: string;
    message: string;
}

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

const FormComponent = () => {
    const { register, handleSubmit, errors, watch } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });

    return (
        <FormWrapper>
            <Form action="/" name="contact" method="POST" data-netlify="true">
                <Input type="hidden" name="form-name" value="contact"/>
                <InputWrapper marginBottom={16}>
                    <InputLabel>Imię i nazwisko *</InputLabel>
                    <InputField className={errors.fullName ? 'error' : ''}>
                        <Input
                            autoComplete="off"
                            name="fullName"
                            ref={register}
                        />
                        <InputError>
                            {errors.fullName?.message &&
                                'Twoje dane są wymagane.'}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>Firma</InputLabel>
                    <InputField>
                        <Input
                            autoComplete="off"
                            name="company"
                            ref={register}
                        />
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={16}>
                    <InputLabel>E-mail *</InputLabel>
                    <InputField className={errors.email ? 'error' : ''}>
                        <Input name="email" ref={register} autoComplete="off" />
                        <InputError>
                            {errors.email?.message &&
                                'Wprowadź poprawny adres email.'}
                        </InputError>
                    </InputField>
                </InputWrapper>
                <InputWrapper marginBottom={24}>
                    <InputLabel>Wiadomość *</InputLabel>
                    <InputField>
                        <TextArea name="message" ref={register} />
                    </InputField>
                </InputWrapper>
                <ButtonWrapper>
                    <ButtonForm buttonType="PRIMARY">Wyślij</ButtonForm>
                    <PrivatePolicy>
                        Klikając wyślij zgdzasz się z{' '}
                        <LinkText
                            href="/docs/polityka_prywatnosci.pdf"
                            fontSize="s"
                        >
                            Polityką Prywatności
                        </LinkText>{' '}
                        AI Embassy.
                    </PrivatePolicy>
                </ButtonWrapper>
            </Form>
        </FormWrapper>
    );
};

export default FormComponent;
